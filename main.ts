namespace SpriteKind {
    export const First = SpriteKind.create()
    export const Second = SpriteKind.create()
    export const Third = SpriteKind.create()
    export const Fourth = SpriteKind.create()
    export const Fifth = SpriteKind.create()
    export const Sixth = SpriteKind.create()
    export const Seventh = SpriteKind.create()
    export const eighth = SpriteKind.create()
    export const Ninth = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    letterGuess = letterIndex[(letterIndex.indexOf(letterGuess) + 1) % 26]
    mySprite2.setImage(letterImages[letterIndex.indexOf(letterGuess) % 26])
    mySprite2.setScale(2, ScaleAnchor.Middle)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed()) {
        if (guessList[letterIndex.indexOf(letterGuess)] < 1 && secretWord.includes(letterGuess)) {
            for (let index = 0; index <= secretWord.length - 1; index++) {
                if (secretWord.charAt(index) == letterGuess) {
                    mySprite3 = sprites.create(letterImages[letterIndex.indexOf(letterGuess)], SpriteKind.Player)
                    mySprite3.setVelocity((sprites.allOfKind(typeIndex[index])[0].x - mySprite3.x) / 2, -100)
                    mySprite3.ay = 100
                    pause(2000)
                    mySprite3.setVelocity(0, 0)
                    mySprite3.ay = 0
                    mySprite3.setPosition(posX + 18 * index, 60)
                    correctGuesses += 1
                }
            }
            guessList[letterIndex.indexOf(letterGuess)] = 1
            music.baDing.play()
        } else {
            info.changeLifeBy(-1)
            music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
        }
        if (correctGuesses > secretWord.length - 1) {
            pause(500)
            game.gameOver(true)
        }
    }
    pause(500)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    letterGuess = letterIndex[(letterIndex.indexOf(letterGuess) - 1) % 26]
    mySprite2.setImage(letterImages[letterIndex.indexOf(letterGuess) % 26])
    mySprite2.setScale(2, ScaleAnchor.Middle)
})
info.onLifeZero(function () {
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
    textSprite.setText("")
    game.gameOver(false)
})
let correctGuesses = 0
let mySprite3: Sprite = null
let guessList: number[] = []
let mySprite2: Sprite = null
let posX = 0
let letterIndex: string[] = []
let letterImages: Image[] = []
let typeIndex: number[] = []
let secretWord = ""
let letterGuess = ""
let textSprite: TextSprite = null
game.setGameOverEffect(false, effects.dissolve)
textSprite = textsprite.create("")
textSprite.setPosition(70, 60)
letterGuess = "a"
let randomWordPicker = randint(0, 3)
if (randomWordPicker < 1) {
    secretWord = "" + [
    "bug",
    "tree",
    "car",
    "bird",
    "bee",
    "can",
    "bin"
    ]._pickRandom() + ["", "s"]._pickRandom()
} else if (randomWordPicker > 1) {
    secretWord = "" + ["aid", "grip"]._pickRandom() + ["", "es"]._pickRandom()
} else if (randomWordPicker == 1) {
    secretWord = "" + ["show", "land", "happen"]._pickRandom() + ["", "ing"]._pickRandom()
} else {
    secretWord = "" + ["happen", "land"]._pickRandom() + ["", "ed"]._pickRandom()
}
typeIndex = [
SpriteKind.First,
SpriteKind.Second,
SpriteKind.Third,
SpriteKind.Fourth,
SpriteKind.Fifth,
SpriteKind.Sixth,
SpriteKind.Seventh,
SpriteKind.eighth,
SpriteKind.Ninth
]
letterImages = [
assets.image`A`,
assets.image`B`,
assets.image`C`,
assets.image`D`,
assets.image`E`,
assets.image`F`,
assets.image`G`,
assets.image`H`,
assets.image`I`,
assets.image`J`,
assets.image`K`,
assets.image`L`,
assets.image`M`,
assets.image`N`,
assets.image`O`,
assets.image`P`,
assets.image`Q`,
assets.image`R`,
assets.image`S`,
assets.image`T`,
assets.image`U`,
assets.image`V`,
assets.image`W`,
assets.image`X`,
assets.image`Y`,
assets.image`Z`
]
letterIndex = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
info.setLife(5)
pause(250)
textSprite.setText(secretWord)
pause(2000)
textSprite.setText("")
posX = 0 - secretWord.length * 10 + 95
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.First)
mySprite.x = posX
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Second)
mySprite.x = posX + 18
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Third)
mySprite.x = posX + 36
if (secretWord.length > 3) {
    mySprite = sprites.create(assets.image`myImage`, SpriteKind.Fourth)
    mySprite.x = posX + 54
}
if (secretWord.length > 4) {
    mySprite = sprites.create(assets.image`myImage`, SpriteKind.Fifth)
    mySprite.x = posX + 72
}
if (secretWord.length > 5) {
    mySprite = sprites.create(assets.image`myImage`, SpriteKind.Sixth)
    mySprite.x = posX + 90
}
if (secretWord.length > 6) {
    mySprite = sprites.create(assets.image`myImage`, SpriteKind.Seventh)
    mySprite.x = posX + 108
}
if (secretWord.length > 7) {
    mySprite = sprites.create(assets.image`myImage`, SpriteKind.eighth)
    mySprite.x = posX + 126
}
if (secretWord.length > 8) {
    mySprite = sprites.create(assets.image`myImage`, SpriteKind.Ninth)
    mySprite.x = posX + 144
}
mySprite2 = sprites.create(assets.image`A`, SpriteKind.Player)
mySprite2.setScale(2, ScaleAnchor.Middle)
mySprite2.y = 100
guessList = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
