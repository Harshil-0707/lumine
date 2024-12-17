"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

interface DockerFormData {
  username: string;
  password: string;
}

export const DockerForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DockerFormData>();

  const onSubmit = async (data: DockerFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/docker-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
      // alert("Login failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Docker Hub Username"
        {...register("username", {
          required: "Username is required",
          minLength: {
            value: 4,
            message: "Username must be at least 4 characters",
          },
        })}
        error={errors.username?.message}
        autoComplete="username"
      />

      <Input
        label="Password"
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
        error={errors.password?.message}
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
        autoComplete="current-password"
      />

      <Button type="submit" className="w-full" isLoading={isLoading}>
        Sign In
      </Button>
    </form>
  );
};
