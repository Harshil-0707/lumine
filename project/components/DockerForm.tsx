"use client";
import React, { Component } from "react";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

// Define the types for the form data
interface DockerFormData {
  username: string;
  password: string;
}

interface DockerFormState extends DockerFormData {
  showPassword: boolean;
  isLoading: boolean;
  errors: Record<string, string | undefined>; // Explicit typing for errors
}

export class DockerForm extends Component<{}, DockerFormState> {
  state: DockerFormState = {
    username: "",
    password: "",
    showPassword: false,
    isLoading: false,
    errors: Object.create(null),  // Errors is explicitly typed as Record<string, string | undefined>
  };

  validateForm = (): boolean => {
    const errors: Record<string, string | undefined> = {}; // Correct type for errors
    let isValid = true;

    // Validate username
    if (this.state.username.trim().length < 4) {
      errors.username = "Username must be at least 4 characters";
      isValid = false;
    }

    // Validate password
    if (this.state.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as unknown as Pick<DockerFormState, keyof DockerFormState>);
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!this.validateForm()) return;

    this.setState({ isLoading: true });

    try {
      const response = await fetch("https://lumine-04wz.onrender.com/api/docker-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Login failed");
      }

      const result = await response.json();
      console.log("Login successful:", result);
      alert("Login successful!");
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed: " + error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { username, password, showPassword, isLoading, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="space-y-6">
        <Input
          label="Docker Hub Username"
          name="username"
          value={username}
          onChange={this.handleChange}
          error={errors.username}
          autoComplete="username"
        />

        <Input
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={this.handleChange}
          error={errors.password}
          onTogglePassword={() => this.setState({ showPassword: !showPassword })}
          autoComplete="current-password"
        />

        <Button type="submit" className="w-full" isLoading={isLoading}>
          Sign In
        </Button>
      </form>
    );
  }
}
