
const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

class Pokerhands {
  rankHands(hand1, hand2) {
    if (!hand1 || !hand2) {
      throw new Error('needs two hands')
    }
  }

  sortHand(hand) {
    hand.sort((a, b) => {
      return cardValues.indexOf(a.value) > cardValues.indexOf(b.value)
    })
    return hand
  }

  isRoyalFlush(hand) {
    let royalFlushChecklist = {
      A: false,
      K: false,
      Q: false,
      J: false,
      10: false
    }
    const suits = new Set(hand.map(card => card.suit))
    if (suits.size != 1) {
      return false
    }

    for (let card of hand) {
      if (!(card.value in royalFlushChecklist)) {
        return false
      }

      if (royalFlushChecklist[card.value]) {
        return false
      }

      royalFlushChecklist[card.value] = true
    }

    return true
  }

  isStraightFlush(hand) {
    hand = this.sortHand(hand)

    const suits = new Set(hand.map(card => card.suit))

    let currentIndex
    let previousIndex
    for (let card of hand) {
      if(!previousIndex) {
        previousIndex = cardValues.indexOf(card.value)
      } else {
        currentIndex = cardValues.indexOf(card.value)

        if (previousIndex + 1 != currentIndex) {
          return false
        } else {
          previousIndex = currentIndex
        }
      }
    }

    return suits.size == 1
  }

  isFourOfAKind(hand) {
    const stats = hand.reduce((carry, current) => {
      if (!(current.value in carry)) {
        carry[current.value] = 1
      } else {
        carry[current.value]++
      }
      return carry
    }, {})

    for (let item in stats) {

      if (stats[item] >= 4) {
        return true
      }
    }

    return false
  }

  isFullHouse(hand) {
    if (!hand) {
      return false
    }

    if (hand.length != 5) {
      throw new Error('Invalid Hand')
    }

    hand.forEach(card => {
      if (!('value' in card) || !('suit' in card)) {
        throw new Error('Invalid Hand')
      }
    })

    return false
  }
}

export default new Pokerhands()
