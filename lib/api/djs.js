const DJ_SHEET_ID = '1IMW9uxy8jOAjq-rsSfrV9KPl7uN410hSgITQdEBKvV8'; // todo: move this to .env

export default async function fetchDjs(req, res) {
    const url = `https://spreadsheets.google.com/feeds/cells/${DJ_SHEET_ID}/1/public/full?alt=json`;

    let data = [];
    let response = {};
    try {
        response = await fetch(url);
        data = await response.json();
    } catch (e) {
        console.warn(e);
        return res.status(e.status);
    }

    return res.send(data);
}
