class main {
  val sum = List(1, 2, 3, 4, 5);
  sum.foldLeft(0)((a, b) => a + b)

  val concenate = List("Hallo", " ", "Welt", "!");
  concenate.foldLeft("")((a, b) => a + b)

  val points = List((1, 3), (2, 5), (4, 8), (6, 2))

  val (sumX, sumY) = points.foldLeft((0, 0)) { case ((accX, accY), (x, y)) =>
    (accX + x, accY + y)
  }

  val count = points.length
  val averagePosition = if (count > 0) {
    (sumX.toDouble / count, sumY.toDouble / count)
  } else {
    (0.0, 0.0)  // Default average position if no positions are found
  }

  println(s"Average Position: (${averagePosition._1}, ${averagePosition._2})")

}