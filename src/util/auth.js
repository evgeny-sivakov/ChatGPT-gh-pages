export function getAPI_Key() {
    const key = localStorage.getItem('OpenAI_API_KEY');

    if (!key) {
        return null;
    }
    return key;
}