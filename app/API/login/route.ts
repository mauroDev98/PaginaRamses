import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Authentication (Backend): Simulated credential verification
    if (email === "student@university.edu" && password === "secret123") {
      // Authorization: Returning a simulated JWT token
      return NextResponse.json(
        {
          success: true,
          token: "mock_jwt_abc123.def456.ghi789",
          message: "Login successful",
        },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        { status: 401 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
