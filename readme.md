# RJSON Interpreter

O **RJSON Interpreter** é uma ferramenta desenvolvida em **TypeScript** para processar e interpretar o formato **RJSON** (Random JSON).

## **O que é o RJSON?**

O RJSON é uma extensão do formato JSON tradicional, que permite adicionar **regras dinâmicas** aos valores, como:

- **`:random`**: Gera números aleatórios dentro de um intervalo especificado.
- **`:fixed`**: Mantém o valor fixo, como no JSON comum.
- **`:min`**: Valor mínimo para o random númerico
- **`:max`**: Valor máximo para o random numerico

## **Exemplo de RJSON**

Entrada RJSON:

```json
{
  "nome": (:fixed :value='Gabriel'),
  "idade": (:random :min=10 :max=20)
}
```
