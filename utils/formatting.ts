export const truncate = (text: string, maxLength: number) => {
    if (!text) return ''
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}

export const formatDate = (dateString: string): string => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}
