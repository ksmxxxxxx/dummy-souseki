import DummySouseki from './dummySouseki.js'

test('DummySouseki.singlePragraph', () => {
  const singlePragraph = new DummySouseki().singlePragraph(100)
  expect(singlePragraph).toBe('「一人｜貰《もら》ってやろうか」と先生がいった。')
})

test('DummySouseki.multipleParagraphs', () => {
  const multipleParagraphs = new DummySouseki().multipleParagraphs(100, 3)
  expect(multipleParagraphs).toBe('「一人｜貰《もら》ってやろうか」と先生がいった。\n「貰《もらい》ッ子じゃ、ねえあなた」と奥さんはまた私の方を向いた。\n「子供はいつまで経《た》ったってできっこないよ」と先生がいった。')
})
