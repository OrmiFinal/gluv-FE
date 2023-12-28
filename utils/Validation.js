/**
 * 이메일 주소의 유효성을 검사합니다.
 * @param {string} email - 검사할 이메일 주소
 * @returns {boolean} - 이메일이 유효하면 true, 그렇지 않으면 false를 반환합니다.
 */
export function isValidEmail(email) {
    // 정규 표현식을 사용하여 이메일 주소 유효성 검사
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(email);
}

/**
 * 숫자의 유효성을 검사합니다.
 * @param {string} value - 검사할 숫자
 * @returns {boolean} - 숫자가 유효하면 true, 그렇지 않으면 false를 반환합니다.
 */
export function isNumber(value) {
    value = Number(value)
    console.log( typeof value == 'number' && !isNaN(value))
    return typeof value == 'number' && !isNaN(value);
  }