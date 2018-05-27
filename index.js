function theBeatlesPlay(musicians, instruments) {
  strings = []
  for (i = 0; i < musicians.length; i++) {
    strings.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return strings
}