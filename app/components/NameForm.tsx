"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { submitName } from "../actions"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  )
}

export function NameForm() {
  const [greeting, setGreeting] = useState<string>("")
  const [error, setError] = useState<string>("")

  async function handleSubmit(formData: FormData) {
    try {
      const result = await submitName(formData)
      setGreeting(result)
      setError("")
    } catch (e) {
      setError((e as Error).message)
      setGreeting("")
    }
  }

  return (
    <div className="space-y-6">
      <form action={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <SubmitButton />
      </form>

      {greeting && (
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-semibold text-center text-primary">{greeting}</p>
          </CardContent>
        </Card>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  )
}

