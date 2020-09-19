export function getBigAddress(address: string): string | null {
  const res = address
    .match(/((구좌|남원|대정|성산|애월|한림)읍)|((안덕|우도|추자|표선|한경)면)/g);
  
  if (!res) {
    return null
  }
  
  return res[0]
}

export function removeCity(address: string): string {
  return address .replace('제주특별자치도 제주시 ', "")
}
