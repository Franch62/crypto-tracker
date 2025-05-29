import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3"

export async function fetchTopCoins() {
    const res = await axios.get(`${BASE_URL}/coins/markets`, {
        params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 10,
            page: 1,
            sparkLine: false,
        },
    });

    try {
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export async function fetchCoinDetails(id: string) {
    const res = await axios.get(`${BASE_URL}/coins/${id}`)

    return res.data;
}

export async function fetchCoinMarketChart(id: string, days = 7) {
    const res = await axios.get(`${BASE_URL}/coins/${id}/market_chart`, {
        params: {
            vs_currency: 'usd',
            days: days,
        }
    })

    return res.data;
}