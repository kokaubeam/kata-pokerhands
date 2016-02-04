import * as pokerhands from './index'

describe('kata-pokerhands', () => {
  describe('#rankHands', () => {
    it('should require two hands', () => {
      expect(pokerhands.rankHands).to.throw('needs two hands')
    })
  })

  describe('#sortHand', () => {
    it('should sort a hand, lowest to highest value', () => {
      let sortedHand = pokerhands.sortHand([
        { value: 'A', suite: 'Diamonds' },
        { value: '8', suite: 'Diamonds' }
      ])
      expect(sortedHand).to.deep.equal([
        { value: '8', suite: 'Diamonds' },
        { value: 'A', suite: 'Diamonds' }
      ])
    })
  })

  describe('#isRoyalFlush', () => {
    context('when the hand is a royal flush', () => {
      it('should return true', () => {
        let isRoyalFlush = pokerhands.isRoyalFlush([
          { value: 'A', suit: 'Diamonds' },
          { value: 'K', suit: 'Diamonds' },
          { value: 'Q', suit: 'Diamonds' },
          { value: 'J', suit: 'Diamonds' },
          { value: 10, suit: 'Diamonds' }
        ])
        expect(isRoyalFlush).to.equal(true)
      })
    })

    context('when the hand has a card that is not in a royal flush', () => {
      it('should return false ', () => {
        let isRoyalFlush = pokerhands.isRoyalFlush([
          { value: 'A', suit: 'Diamonds' },
          { value: 'K', suit: 'Diamonds' },
          { value: 3,  suit: 'Diamonds' },
          { value: 'J', suit: 'Diamonds' },
          { value: 10, suit: 'Diamonds' }
        ])
        expect(isRoyalFlush).to.equal(false)
      })
    })

    context('when the hand has duplicate royal flush cards', () => {
      it('should return false', () => {
        let isRoyalFlush = pokerhands.isRoyalFlush([
          { value: 'A', suit: 'Diamonds' },
          { value: 'K', suit: 'Diamonds' },
          { value: 'K', suit: 'Hearts' },
          { value: 'J', suit: 'Diamonds' },
          { value: 10, suit: 'Diamonds' }
        ])
        expect(isRoyalFlush).to.equal(false)
      })
    })

    context('when the hand is not also a straight flush', () => {
      it('should return false', () => {
        let isRoyalFlush = pokerhands.isRoyalFlush([
          { value: 'A', suit: 'Diamonds' },
          { value: 'K', suit: 'Hearts' },
          { value: 'Q', suit: 'Diamonds' },
          { value: 'J', suit: 'Diamonds' },
          { value: 10, suit: 'Diamonds' }
        ])
        expect(isRoyalFlush).to.equal(false)
      })
    })
  })

  describe('#isStraightFlush', () => {
    context('when the hand is a straight flush', () => {
      it('should return true', () => {
        let isStraightFlush = pokerhands.isStraightFlush([
          { value: 3, suit: 'Diamonds' },
          { value: 4, suit: 'Diamonds' },
          { value: 5, suit: 'Diamonds' },
          { value: 6, suit: 'Diamonds' },
          { value: 7, suit: 'Diamonds' }
        ])
        expect(isStraightFlush).to.equal(true)
      })
    })

    context('when the hand is an unsorted straight flush', () => {
      it('should return true', () => {
        let isStraightFlush = pokerhands.isStraightFlush([
          { value: 5, suit: 'Diamonds' },
          { value: 7, suit: 'Diamonds' },
          { value: 3, suit: 'Diamonds' },
          { value: 6, suit: 'Diamonds' },
          { value: 4, suit: 'Diamonds' }
        ])
        expect(isStraightFlush).to.equal(true)
      })
    })


    context('when the hand is not of the same suit', () => {
      it('should return false', () => {
        let isStraightFlush = pokerhands.isStraightFlush([
          { value: 3, suit: 'Hearts' },
          { value: 4, suit: 'Diamonds' },
          { value: 5, suit: 'Diamonds' },
          { value: 6, suit: 'Diamonds' },
          { value: 7, suit: 'Diamonds' }
        ])
        expect(isStraightFlush).to.equal(false)
      })
    })

    context('when the hand does not have consecutive values', () => {
      it('should return false', () => {
        let isStraightFlush = pokerhands.isStraightFlush([
          { value: 3, suit: 'Hearts' },
          { value: 4, suit: 'Hearts' },
          { value: 5, suit: 'Hearts' },
          { value: 6, suit: 'Hearts' },
          { value: 10, suit: 'Hearts' }
        ])
        expect(isStraightFlush).to.equal(false)
      })
    })
  })

describe('#isRoyalFlush', () => {
    context('when the hand is four of a kind', () => {
      it('should return true', () => {
        let isFourOfAKind = pokerhands.isFourOfAKind()
        expect(isFourOfAKind).to.equal(true)
      })
    })

    context('when the hand has a card that is not in a royal flush', () => {
      it('should return false ', () => {
        
      })
    })

  })
})
