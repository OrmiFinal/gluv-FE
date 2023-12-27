// 데이터에 섞인 html태그를 벗깁니다.

export const getPlainTextFromHtml = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "";
  };