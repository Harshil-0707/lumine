package main

import (
	"log"
	"net/http"
	"time"
	"os"

	"lumine/backend/routes"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func main() {
	// Initialize the Gorilla Mux router
	r := mux.NewRouter()

	// Register API routes
	routes.RegisterRoutes(r)

	// Enable CORS to allow requests from the frontend (e.g., http://localhost:3000)
	allowedOrigins := handlers.AllowedOrigins([]string{os.Getenv("CORS_ALLOWED_ORIGINS")})
	allowedMethods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"})
	allowedHeaders := handlers.AllowedHeaders([]string{"Content-Type", "Authorization"})

	// Set up a server with custom configurations
	server := &http.Server{
		Handler:      handlers.CORS(allowedOrigins, allowedMethods, allowedHeaders)(r), // Apply CORS middleware
		Addr:         ":" + os.Getenv("PORT"),                                                          // Server listens on port 8080
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	log.Println("Server is running on port", os.Getenv("PORT"))
	// Start the server
	log.Fatal(server.ListenAndServe())
}
