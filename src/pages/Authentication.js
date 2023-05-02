import { redirect } from "react-router";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
    return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}) {
  const data = await request.formData();
  const userAPI_KEY = data.get('apiKey');

  localStorage.setItem('OpenAI_API_KEY', userAPI_KEY);
  return redirect('chat');
}