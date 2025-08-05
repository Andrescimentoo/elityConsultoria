export function extrairMerchantId(url) {
  const regex = /(\w{8}-\w{4}-\w{4}-\w{4}-\w{12})/; // Regex para encontrar o UUID (merchantId)
  const match = url.match(regex);
  return match ? match[0] : null;
}