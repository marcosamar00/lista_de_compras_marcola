// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://hzxlcmqbbsntoaopdvzb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6eGxjbXFiYnNudG9hb3BkdnpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU1MDAsImV4cCI6MjA2MjExMTUwMH0.1ETknQzoodZ0QoOIJ4WJARfD2OnTiCF3ZmaDVlGNa9g'
)