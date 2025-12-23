import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Shield, UserCheck } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">SecureAuth</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="primary">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-balance">
              Secure Authentication with Aadhaar Integration
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Enterprise-grade authentication system with encrypted Aadhaar storage and JWT security
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="text-base">
                Create Account
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                Sign In
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>End-to-End Encryption</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your Aadhaar data is encrypted using industry-standard algorithms before storage
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>JWT Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure token-based authentication with automatic expiration and refresh
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <UserCheck className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Verified Identity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Government-grade identity verification through Aadhaar integration</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
