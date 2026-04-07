const BASE_URL = '/api';

export async function fetchContent(key) {
    const res = await fetch(`${BASE_URL}/content/${key}?conference=cyber`);
    if (!res.ok) return null;
    return res.json();
}

export async function fetchAllContent() {
    const res = await fetch(`${BASE_URL}/content?conference=cyber`);
    if (!res.ok) return null;
    return res.json();
}