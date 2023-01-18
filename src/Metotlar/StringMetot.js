const String = [
  {
    id: "at",
    title: "at",
    syntax: "Syntax => { at(index) }",
    value: "const pangram = 'Pijamalı hasta yağız şoföre çabucak güvendi.'",
    paragraph: [
      "Bir tam sayı değeri alır ve stringte karşılık gelen değeri döndürür.",
      "Verilen değer bulunamazsa `undefinied` döndürür.",
    ],
    output: [
      ["pangram.at(5)", "//Çıktı: a"],
      ["pangram.at(-5)", "//Çıktı: e"],
    ],
  },
  {
    id: "charAt",
    title: "charAt",
    paragraph: [
      "0+ değer alır verilen değer string uzunluğundan fazla ise boş string döndürür.",
      "Değer verilmezse varsayılan olarak `0` indeksini döndürür.",
    ],
  },
  {
    id: "charCodeAt",
    title: "charCodeAt",
    paragraph: [
      "Ondalık tabanda karakter kodunu döndürür",
      "`Alt + karakter kodu` ile değeri kullanarak çıktısını alabilirsiniz.",
    ],
  },
  {
    id: "concat",
    title: "concat",
  },
  {
    id: "endswith",
    title: "endswith",
  },
  {
    id: "includes",
    title: "includes",
  },
  {
    id: "indexOf",
    title: "indexOf",
  },
  {
    id: "lastIndexOf",
    title: "lastIndexOf",
  },
  {
    id: "length",
    title: "length",
  },
  {
    id: "localeCompare",
    title: "localeCompare",
  },
  {
    id: "match",
    title: "match",
  },
  {
    id: "matchAll",
    title: "matchAll",
  },
  {
    id: "normalize",
    title: "normalize",
  },
  {
    id: "padEnd",
    title: "padEnd",
  },
  {
    id: "padStart",
    title: "padStart",
  },
  {
    id: "String.raw",
    title: "String.raw",
  },
  {
    id: "repeat",
    title: "repeat",
  },
  {
    id: "replace",
    title: "replace",
  },
  {
    id: "replaceAll",
    title: "replaceAll",
  },
  {
    id: "search",
    title: "search",
  },
  {
    id: "slice",
    title: "slice",
  },
  {
    id: "split",
    title: "split",
  },
  {
    id: "startsWith",
    title: "startsWith",
  },
  {
    id: "substring",
    title: "substring",
  },
  {
    id: "toLocaleLowerCase",
    title: "toLocaleLowerCase",
  },
  {
    id: "toLocaleUpperCase",
    title: "toLocaleUpperCase",
  },
  {
    id: "toLowerCase",
    title: "toLowerCase",
  },
  {
    id: "toUpperCase",
    title: "toUpperCase",
  },
  {
    id: "trim",
    title: "trim",
  },
  {
    id: "trimStart",
    title: "trimStart",
  },
  {
    id: "trimEnd",
    title: "trimEnd",
  },
  {
    id: "toString",
    title: "toString",
  },
];

export default String;
