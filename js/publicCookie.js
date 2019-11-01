/* *********设置cookie********** */
function setCookie (key, value, expires) {
    const time = new Date()
    time.setTime(time.getTime() - 1000 * 60 * 60 * 8 +1000*expires) // 用于设置过期时间
    document.cookie = `${key}=${value};expires=${time};`
    }
/* *********获取cookie********** */
function getCookie(key) {
    const cookieArr = document.cookie.split(';')
    
    let value = ''
    
    cookieArr.forEach(item => {
    if (item.split('=')[0] === key) {
    value = item.split('=')[1]
    }
    })
    
    return value
    }

/* *********删除cookie********** */
function delCookie(name) {
    setCookie(name, 1, -1)
    }