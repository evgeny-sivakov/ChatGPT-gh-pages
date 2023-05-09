import { redirect } from "react-router-dom";

export function action() {
    localStorage.removeItem('OpenAI_API_KEY');
    return redirect('/ChatGPT-gh-pages');
}