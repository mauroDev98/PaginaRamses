import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="py-4">
      {/* We invoke the form containing frontend validation and auth logic */}
      <LoginForm />
    </div>
  );
}
