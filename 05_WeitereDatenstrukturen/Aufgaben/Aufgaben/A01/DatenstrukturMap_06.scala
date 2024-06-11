val m4: Map[String, String] = Map(
  "key2" -> "aDifferentValue"
)
val valueFromM4: Option[String] = m4.get("key")

println(valueFromM4) // Ausgabe: None
