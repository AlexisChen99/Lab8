describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('../../../../index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });
  
});

describe('Slider changes when volume input changes', () => {
  beforeEach(() => {
    cy.visit('../../../../index.html');
  });

  it('Slider changes when volume input changes', () =>{
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
    .then($el => {
      expect($el).to.have.value(75);
    });
    
  })
});

describe('Volume input changes when slider changes', ()=>{
  beforeEach(() => {
    cy.visit('../../../../index.html');
  });

  it('Volume input chagnes when slider changes', () =>{
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number')
    .then($el => {
      expect($el).to.have.value(33)
    });
  });

  it('audio changes when slider changes', ()=>{
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound')
    .then($el => {
      expect($el).to.have.prop("volume", 0.33);
    })
  })

  it('image changes when party horn radio button changes', () => {
    cy.get('#radio-air-horn').check();
    cy.get('#sound-image')
    .then($el => {
      expect($el).to.have.attr("src", "./assets/media/images/air-horn.svg");
    })
    cy.get('#horn-sound')
    .then($el => {
      expect($el).to.have.attr("src", "./assets/media/audio/air-horn.mp3");
    })

    cy.get('#radio-party-horn').check();
    cy.get('#sound-image')
    .then($el => {
      expect($el).to.have.attr("src", "./assets/media/images/party-horn.svg");
    })
    cy.get('#horn-sound')
    .then($el => {
      expect($el).to.have.attr("src", "./assets/media/audio/party-horn.mp3");
    })

    cy.get('#radio-car-horn').check();
    cy.get('#sound-image')
    .then($el => {
      expect($el).to.have.attr("src", "./assets/media/images/car.svg");
    })
    cy.get('#horn-sound')
    .then($el => {
      expect($el).to.have.attr("src", "./assets/media/audio/car-horn.mp3");
    })
  })

  it("volume iamge changes when volume changes", ()=>{
    cy.get("#volume-number").clear().type('67')
    cy.get("#volume-image")
    .then($el => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-3.svg");
    })

    cy.get("#volume-number").clear().type('34')
    cy.get("#volume-image")
    .then($el => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-2.svg");
    })

    cy.get("#volume-number").clear().type('1')
    cy.get("#volume-image")
    .then($el => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-1.svg");
    })

    cy.get("#volume-number").clear().type('0')
    cy.get("#volume-image")
    .then($el => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-0.svg");
    })
  })

  it("honk button disable when input is empty or non-number", () =>{
    cy.get("#volume-number").clear().type('0')
    cy.get("#honk-btn")
    .then($el => {
      expect($el).to.have.attr("disabled", "disabled");
    })

    cy.get("#volume-number").clear().type(' ')
    cy.get("#honk-btn")
    .then($el => {
      expect($el).to.have.attr("disabled", "disabled");
    })

    cy.get("#volume-number").clear().type('abc')
    cy.get("#honk-btn")
    .then($el => {
      expect($el).to.have.attr("disabled", "disabled");
    })

    cy.get("#volume-number").clear().type('lolol')
    cy.get("#honk-btn")
    .then($el => {
      expect($el).to.have.attr("disabled", "disabled");
    })
  })

  it("error is shwon when type a number outside of range in volume", () => {
    cy.get("#volume-number").clear(0).type('-5430257');
    cy.get("#party-horn-form").within(() => {
      cy.get('input:invalid').should('have.length', 1);
    })

    cy.get("#volume-number").clear(0).type('100000');
    cy.get("#party-horn-form").within(() => {
      cy.get('input:invalid').should('have.length', 1);
    })

    cy.get("#volume-number").clear(0).type('24057203948');
    cy.get("#party-horn-form").within(() => {
      cy.get('input:invalid').should('have.length', 1);
    })

    cy.get("#volume-number").clear(0).type('-24057203948');
    cy.get("#party-horn-form").within(() => {
      cy.get('input:invalid').should('have.length', 1);
    })
  })
})
