
const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
const cardSuits = ['Diamonds', 'Hearts', 'Spades', 'Clubs']

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

  isValidHand(hand) {
    if (!hand) {
      return false
    }

    if (hand.length != 5) {
      return false
    }

    for (let card of hand) {
      if (!this.isValidCard(card)) {
        return false
      }
    }

    return true
  }

  isValidCard(card) {
    if (cardValues.indexOf(card.value) == -1) {
      return false
    }

    if (cardSuits.indexOf(card.suit) == -1) {
      return false
    }

    return true
  }

  isStraight(hand) {
    const cardValuesInHand = this.sortHand(hand).map(card => card.value)

    let previousIndex = cardValues.indexOf(cardValuesInHand[0])
    for (var i = 1; i < cardValuesInHand.length; i++) {
      console.log(cardValuesInHand[i]);
      let currentIndex = cardValues.indexOf(cardValuesInHand[i])
      if (previousIndex + 1 === currentIndex) {
        previousIndex = currentIndex
        continue
      }
      return false
    }

    return true
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

  isThreeOfAKind(hand) {
    if (!this.isValidHand(hand)) {
      return false
    }

    const cardCounts = this.countOccurrancesOfCardValues(hand)

    for (let item in cardCounts) {
      if (cardCounts[item] == 3) {
        return true
      }
    }

    return false
  }

  isFourOfAKind(hand) {
    const cardCounts = this.countOccurrancesOfCardValues(hand)

    for (let item in cardCounts) {
      if (cardCounts[item] >= 4) {
        return true
      }
    }

    return false
  }

  isFullHouse(hand) {
    if (!this.isValidHand(hand)) {
      return false
    }

    const cardCounts = this.countOccurrancesOfCardValues(hand)

    const cardValueTypes = Object.keys(cardCounts).length
    if (cardValueTypes == 2) {
      return true
    }

    return false
  }

  isPair(hand) {
    if (!this.isValidHand(hand)) {
      return false
    }

    return this.countPairs(hand) === 1
  }

  isTwoPair(hand) {
    if (!this.isValidHand(hand)) {
      return false
    }

    return this.countPairs(hand) == 2
  }

  countPairs(hand) {
    const cardCounts = this.countOccurrancesOfCardValues(hand)

    let pairCount = 0
    for (let cardValue in cardCounts) {
      let cardCount = cardCounts[cardValue]
      if (cardCount == 2) {
        pairCount++
      }
    }

    return pairCount
  }

  countOccurrancesOfCardValues(hand) {
    const stats = hand.reduce((carry, current) => {
      if (!(current.value in carry)) {
        carry[current.value] = 1
      } else {
        carry[current.value]++
      }
      return carry
    }, {})

    return stats
  }
}

export default new Pokerhands()
