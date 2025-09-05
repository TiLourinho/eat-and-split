import ShortUniqueId from "short-unique-id";

export default function generateId() {
  const uid = new ShortUniqueId({ length: 4 });

  return uid.rnd();
}
