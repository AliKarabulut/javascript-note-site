const String = [
  {
    name: "StringMetot",
    id: "at",
    title: "at",
    syntax: ["at(index)","at(index00)"],
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
    name: "StringMetot",
    id: "charAt",
    title: "charAt",
    paragraph: [
      "0+ değer alır verilen değer string uzunluğundan fazla ise boş string döndürür.",
      "Değer verilmezse varsayılan olarak `0` indeksini döndürür.",
    ],
  },
  {
    name: "StringMetot",
    id: "charCodeAt",
    title: "charCodeAt",
    paragraph: [
      "Ondalık tabanda karakter kodunu döndürür",
      "`Alt + karakter kodu` ile değeri kullanarak çıktısını alabilirsiniz.",
    ],
  },
  {
    name: "StringMetot",
    id: "concat",
    title: "concat",
  },
  {
    name: "StringMetot",
    id: "endswith",
    title: "endswith",
  },
  {
    name: "StringMetot",
    id: "includes",
    title: "includes",
  },
  {
    name: "StringMetot",
    id: "indexOf",
    title: "indexOf",
  },
  {
    name: "StringMetot",
    id: "lastIndexOf",
    title: "lastIndexOf",
  },
  {
    name: "StringMetot",
    id: "length",
    title: "length",
  },
  {
    name: "StringMetot",
    id: "localeCompare",
    title: "localeCompare",
  },
  {
    name: "StringMetot",
    id: "match",
    title: "match",
  },
  {
    name: "StringMetot",
    id: "matchAll",
    title: "matchAll",
  },
  {
    name: "StringMetot",
    id: "normalize",
    title: "normalize",
  },
  {
    name: "StringMetot",
    id: "padEnd",
    title: "padEnd",
  },
  {
    name: "StringMetot",
    id: "padStart",
    title: "padStart",
  },
  {
    name: "StringMetot",
    id: "String.raw",
    title: "String.raw",
  },
  {
    name: "StringMetot",
    id: "repeat",
    title: "repeat",
  },
  {
    name: "StringMetot",
    id: "replace",
    title: "replace",
  },
  {
    name: "StringMetot",
    id: "replaceAll",
    title: "replaceAll",
  },
  {
    name: "StringMetot",
    id: "search",
    title: "search",
  },
  {
    name: "StringMetot",
    id: "slice",
    title: "slice",
  },
  {
    name: "StringMetot",
    id: "split",
    title: "split",
  },
  {
    name: "StringMetot",
    id: "startsWith",
    title: "startsWith",
  },
  {
    name: "StringMetot",
    id: "substring",
    title: "substring",
  },
  {
    name: "StringMetot",
    id: "toLocaleLowerCase",
    title: "toLocaleLowerCase",
  },
  {
    name: "StringMetot",
    id: "toLocaleUpperCase",
    title: "toLocaleUpperCase",
  },
  {
    name: "StringMetot",
    id: "toLowerCase",
    title: "toLowerCase",
  },
  {
    name: "StringMetot",
    id: "toUpperCase",
    title: "toUpperCase",
  },
  {
    name: "StringMetot",
    id: "trim",
    title: "trim",
  },
  {
    name: "StringMetot",
    id: "trimStart",
    title: "trimStart",
  },
  {
    name: "StringMetot",
    id: "trimEnd",
    title: "trimEnd",
  },
  {
    name: "StringMetot",
    id: "toString",
    title: "toString",
  },
];

export default String;
