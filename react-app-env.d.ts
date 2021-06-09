declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: "development" | "production" | "test" | "serviceWorker"
        PUBLIC_URL: string
    }
}
