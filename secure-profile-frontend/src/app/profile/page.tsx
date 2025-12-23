"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, User, CreditCard, LogOut, Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface UserProfile {
  username: string;
  email: string;
  aadhaar: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const response = await fetch("http://127.0.0.1:8000/api/profile/", {
          headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
        });

        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem("authToken");
            router.push("/login");
            return;
          }
          throw new Error("Failed to fetch profile");
        }

        const data: UserProfile = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">SecureAuth</span>
          </Link>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="flex-1 px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
            <p className="text-muted-foreground">View your secure account information</p>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {profile && (
            <div className="grid gap-6">
              {/* Account Information Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Account Information
                  </CardTitle>
                  <CardDescription>Your personal account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-[100px_1fr] gap-4 py-2 border-b border-border">
                    <span className="text-sm font-medium text-muted-foreground">Username</span>
                    <span className="text-sm font-mono">{profile.username}</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-4 py-2">
                    <span className="text-sm font-medium text-muted-foreground">Email</span>
                    <span className="text-sm font-mono">{profile.email}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Aadhaar Information Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Aadhaar Information
                  </CardTitle>
                  <CardDescription>Your encrypted Aadhaar details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-[100px_1fr] gap-4 py-2">
                    <span className="text-sm font-medium text-muted-foreground">Aadhaar</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono tracking-wider">{profile.aadhaar}</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-green-500/10 text-green-600 text-xs font-medium">
                        Encrypted
                      </span>
                    </div>
                  </div>
                  <Alert className="bg-muted/50 border-muted-foreground/20">
                    <Shield className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      Your Aadhaar number is encrypted using AES-256 encryption before storage. The displayed number has
                      been decrypted for your viewing.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>              
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
