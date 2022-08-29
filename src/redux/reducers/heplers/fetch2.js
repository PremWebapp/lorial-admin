
export const postApiWithoutToken = async (api, data) => {
    const res = await fetch(api, {
        method: 'post', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    const result = await res.json()
    return result
}

export const getItems = async (api, token = '') => {
    const res = await fetch(api, {
        method: 'get', // or 'PUT'
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    })
    const result = await res.json()
    return result
}

export const postItems = async (api, data, token = '') => {
    const res = await fetch(api, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(data),
    })
    const result = await res.json()
    return result
}

export const deleteItems = async (api,token = '') => {
    const res = await fetch(api, {
        method: 'DELETE', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        // body: JSON.stringify(data),
    })
    const result = await res.json()
    return result
}

export const postWithImageItems = async (api, data = '', token = '', type = 'GET') => {
    const res = await fetch(api, {
        method: type, // or 'PUT'
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        body: data,
    })
    const result = await res.json()
    return result
}