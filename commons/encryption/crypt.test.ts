const { expect } = require('chai')
const { crypt } = require('.')

describe('crypt', () => {

  const testPassword = '김성욱'
  const key = 'fin2bwook'

  it('cipher and decipher', () => {

    const encoded = crypt.encrypt('김성욱')
    console.log('헌부민민천건 계좌', crypt.encrypt('3170000101111'))
    console.log('(헌)부민민천건', crypt.encrypt('(헌)부민민천건'))
    console.log('encoded', encoded)

    const decoded = crypt.decrypt(encoded)
    expect(decoded).to.equals(testPassword)
  })

  it('cipher and decipher2', () => {

    const 핀투비 = 'h1PX7Ip8b1ajPN+3OxCt4XMsLttsfQFtWBmU4uGT57Y='
    // const 나 = 'EowxDd4BKvgLzDDC8u0JDgy3m8JUIC+aPxNWrmCU7vQ=';
    const 은행계좌 = 'asq4r+5NEjhY1yWCDn7ulQ=='
    const swk = 'NTK3P+43N0WtrH2i4/INxw=='
    const 김성욱 = 'Wp4inuLtfoVPj8CB4c5F8Q=='
    // const encoded = crypt.encrypt(testPassword);
    const decoded핀투비 = crypt.decrypt(핀투비)
    console.log('핀투비', decoded핀투비)
    console.log('은행계좌', crypt.decrypt(은행계좌))
    expect(decoded핀투비).to.be.a('string')
    // expect(decoded).to.equals(testPassword);
  })

  it('hash and compare', async () => {

    const password = 'fin2b1028##'
    const hash = 'utXG5stUhLFnr5PVYRCRcz9rieiP4dZRJfN7DcwDBT8chS94vJLh6ck2p2N//SIjGa043ogrAEcotQrhgj/ysw=='
    // const hash = await crypt.hash(password);
    console.log('hash', hash)

    const result = await crypt.compare(password, hash)
    expect(result).to.be.true
  })

  it('create hash', async () => {

    const password = 'fin2b1028##'
    const hash = 'utXG5stUhLFnr5PVYRCRcz9rieiP4dZRJfN7DcwDBT8chS94vJLh6ck2p2N//SIjGa043ogrAEcotQrhgj/ysw=='
    // const hash = await crypt.hash(password);
    console.log('hash', hash)

    const hashPw = await crypt.hash(password)
    console.log('hashPw', hashPw)
    const result = await crypt.compare(password, hash)
    expect(result).to.be.true
  })
})

// NODE_ENV=local mocha ./util/crypt/crypt.test.js -- mode=local
