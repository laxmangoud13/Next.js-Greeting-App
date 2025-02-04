"use server"

export async function submitName(formData: FormData) {
  const name = formData.get("name") as string
  if (!name) throw new Error("Name is required")
  return `Hello ${name}!`
}

