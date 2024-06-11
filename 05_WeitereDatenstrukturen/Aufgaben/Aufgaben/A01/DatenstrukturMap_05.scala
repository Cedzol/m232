val m3: Map[String, String] = Map(
  "key" -> "value",
  "key2" -> "aDifferentValue"
)

val valueFromM3: Option[String] = m3.get("key")

println(valueFromM3)