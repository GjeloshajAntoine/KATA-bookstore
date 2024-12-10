export async function requestWrapper(url) {
    const request = await fetch(url);
    return await request.json();
}