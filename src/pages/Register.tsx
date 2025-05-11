import React from "react"
import MainLayout from "@/components/layout/MainLayout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { RegisterForm } from "@/components/auth/RegisterForm"

export default function RegisterPage() {
  return (
    <MainLayout>
      <div className="container max-w-lg mx-auto py-8 shadow-2xl rounded-md">
        <Card className="glass-card">
          <CardHeader className="text-center space-y-1">
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription className="text-sm text-blue-800">Register for your AccessPro account</CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
