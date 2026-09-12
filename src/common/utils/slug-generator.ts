export function generateSlug(title: string): string {
  return title
    .toLowerCase() // Converte para minúsculas
    .trim() // Remove espaços no início e fim
    .normalize('NFD') // Normaliza caracteres acentuados
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Substitui múltiplos hífens por um único
    .replace(/^-+|-+$/g, ''); // Remove hífens no início e fim
}
