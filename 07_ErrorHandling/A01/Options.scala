case class TvShow(title: String, start: Int, end: Int)

def extractName(rawShow: String): Option[String] = {
  val titlePattern = """^(.+?)\s\(\d{4}-\d{4}\)$""".r
  rawShow match {
    case titlePattern(title) => Some(title)
    case _ => None
  }
}

def extractYearEnd(rawShow: String): Option[Int] = {
  val yearPattern = """.+\((\d{4})-(\d{4})\)$""".r
  rawShow match {
    case yearPattern(_, endYear) => Some(endYear.toInt)
    case _ => None
  }
}

// Beispielaufrufe
val show1 = "Breaking Bad (2008-2013)"
val show2 = "Friends (1994-2004)"

println(extractName(show1))  // Some(Breaking Bad)
println(extractYearEnd(show1))  // Some(2013)

println(extractName(show2))  // Some(Friends)
println(extractYearEnd(show2))  // Some(2004)
