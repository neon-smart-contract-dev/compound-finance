```bash
Using network test http://localhost:9090/solana
Setup in 45 ms
 PASS  tests/Tokens/mintAndRedeemTest.js (833.114s)
  CToken
    mintFresh
      ✓ fails if comptroller tells it to (20818ms)
      ✓ proceeds if comptroller tells it to (20714ms)
      ✓ fails if not fresh (19668ms)
      ✓ continues if fresh (21693ms)
      ✓ fails if insufficient approval (20731ms)
      ✓ fails if insufficient balance (20986ms)
      ✓ proceeds if sufficient approval and balance (20842ms)
      ✓ fails if exchange calculation fails (21102ms)
      ✓ fails if transferring in fails (20946ms)
      ✓ transfers the underlying cash, tokens, and emits Mint, Transfer events (21364ms)
    mint
      ✓ emits a mint failure if interest accrual fails (24113ms)
      ✓ returns error from mintFresh without emitting any extra logs (20971ms)
      ✓ returns success from mintFresh and mints the correct number of tokens (24193ms)
      ✓ emits an AccrueInterest event (24430ms)
    redeemFreshTokens
      ✓ fails if comptroller tells it to (22126ms)
      ✓ fails if not fresh (22039ms)
      ✓ continues if fresh (23015ms)
      ✓ fails if insufficient protocol cash to transfer out (22073ms)
      ✓ fails if exchange calculation fails (22115ms)
      ✓ fails if transferring out fails (21949ms)
      ✓ fails if total supply < redemption amount (21865ms)
      ✓ reverts if new account balance underflows (21657ms)
      ✓ transfers the underlying cash, tokens, and emits Redeem, Transfer events (22358ms)
    redeemFreshAmount
      ✓ fails if comptroller tells it to (22024ms)
      ✓ fails if not fresh (21952ms)
      ✓ continues if fresh (23174ms)
      ✓ fails if insufficient protocol cash to transfer out (22066ms)
      ✓ fails if exchange calculation fails (22112ms)
      ✓ fails if transferring out fails (22099ms)
      ✓ fails if total supply < redemption amount (22098ms)
      ✓ reverts if new account balance underflows (22243ms)
      ✓ transfers the underlying cash, tokens, and emits Redeem, Transfer events (22142ms)
    redeem
      ✓ emits a redeem failure if interest accrual fails (25355ms)
      ✓ returns error from redeemFresh without emitting any extra logs (26332ms)
      ✓ returns success from redeemFresh and redeems the right amount (27539ms)
      ✓ returns success from redeemFresh and redeems the right amount of underlying (25463ms)
      ✓ emits an AccrueInterest event (25245ms)

Test Suites: 1 passed, 1 total
Tests:       37 passed, 37 total
Snapshots:   0 total
Time:        833.139s


Using network test http://localhost:9090/solana
Setup in 47 ms
 PASS  tests/Tokens/safeTokenTest.js (43.285s)
  CEther
    getCashPrior
      ✓ returns the amount of ether held by the cEther contract before the current message (6874ms)
    doTransferIn
      ✓ succeeds if from is msg.nonRoot and amount is msg.value (6737ms)
      ✓ reverts if from != msg.sender (6636ms)
      ✓ reverts if amount != msg.value (6813ms)
      doTransferOut
        ✓ transfers ether out (8027ms)
        ✓ reverts if it fails (6749ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        43.32s


Using network test http://localhost:9090/solana
Setup in 63 ms
 PASS  tests/Tokens/mintAndRedeemCEtherTest.js (161.238s)
  CEther
    mintExplicit
      ✓ reverts if interest accrual fails (13240ms)
      ✓ returns success from mintFresh and mints the correct number of tokens (13559ms)
    mintFallback
      ✓ reverts if interest accrual fails (13303ms)
      ✓ returns success from mintFresh and mints the correct number of tokens (13509ms)
    redeemCTokens
      ✓ emits a redeem failure if interest accrual fails (17622ms)
      ✓ returns error from redeemFresh without emitting any extra logs (16459ms)
      ✓ returns success from redeemFresh and redeems the correct amount (18863ms)
    redeemUnderlying
      ✓ emits a redeem failure if interest accrual fails (17555ms)
      ✓ returns error from redeemFresh without emitting any extra logs (16599ms)
      ✓ returns success from redeemFresh and redeems the correct amount (18956ms)

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        161.274s


Using network test http://localhost:9090/solana
Setup in 76 ms
 PASS  tests/Tokens/liquidateTest.js (975.65s)
  CToken
    liquidateBorrowFresh
      ✓ fails if comptroller tells it to (49803ms)
      ✓ proceeds if comptroller tells it to (51056ms)
      ✓ fails if market not fresh (50284ms)
      ✓ fails if collateral market not fresh (51822ms)
      ✓ fails if borrower is equal to liquidator (49180ms)
      ✓ fails if repayAmount = 0 (49354ms)
      ✓ fails if calculating seize tokens fails and does not adjust balances (51981ms)
      ✓ fails if repay fails (50537ms)
      ✓ reverts if seize fails (49965ms)
      ✓ transfers the cash, borrows, tokens, and emits Transfer, LiquidateBorrow events (52545ms)
      ○ skipped reverts if liquidateBorrowVerify fails
    liquidateBorrow
      ✓ emits a liquidation failure if borrowed asset interest accrual fails (52764ms)
      ✓ emits a liquidation failure if collateral asset interest accrual fails (52510ms)
      ✓ returns error from liquidateBorrowFresh without emitting any extra logs (51294ms)
      ✓ returns success from liquidateBorrowFresh and transfers the correct amounts (54710ms)
    seize
      ✓ fails if seize is not allowed (50541ms)
      ✓ fails if cTokenBalances[borrower] < amount (50065ms)
      ✓ fails if cTokenBalances[liquidator] overflows (49889ms)
      ✓ succeeds, updates balances, adds to reserves, and emits Transfer and ReservesAdded events (50956ms)
  Comptroller
    ✓ liquidateBorrowAllowed allows deprecated markets to be liquidated (55082ms)

Test Suites: 1 passed, 1 total
Tests:       1 skipped, 19 passed, 20 total
Snapshots:   0 total
Time:        975.672s


Using network test http://localhost:9090/solana
Setup in 44 ms
 PASS  tests/Tokens/setComptrollerTest.js (168.301s)
  CToken
    _setComptroller
      ✓ should fail if called by non-admin (41232ms)
      ✓ reverts if passed a contract that doesnot implement isComptroller (40362ms)
      ✓ reverts if passed a contract that implements isComptroller as false (43525ms)
      ✓ updates comptroller and emits log on success (42153ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        168.326s


Using network test http://localhost:9090/solana
Setup in 38 ms
 PASS  tests/Tokens/transferTest.js (97.624s)
  CToken
    transfer
      ✓ cannot transfer from a zero balance (26201ms)
      ✓ transfers 50 tokens (28259ms)
      ✓ doesnot transfer when src == dst (27047ms)
      ✓ rejects transfer when not allowed and reverts if not verified (15133ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        97.645s


Using network test http://localhost:9090/solana
Setup in 43 ms
 PASS  tests/Tokens/cTokenTest.js (631.256s)
  CToken
    constructor
      ✓ fails when non erc-20 underlying (20737ms)
      ✓ fails when 0 initial exchange rate (23023ms)
      ✓ succeeds with erc-20 underlying and non-zero exchange rate (25436ms)
      ✓ succeeds when setting admin to contructor argument (25442ms)
    name, symbol, decimals
      ✓ should return correct name (25385ms)
      ✓ should return correct symbol (25461ms)
      ✓ should return correct decimals (25490ms)
    balanceOfUnderlying
      ✓ has an underlying balance (27548ms)
    borrowRatePerBlock
      ✓ has a borrow rate (26631ms)
    supplyRatePerBlock
      ✓ returns 0 if theres no supply (26569ms)
      ✓ has a supply rate (29959ms)
    borrowBalanceCurrent
      ✓ reverts if interest accrual fails (30030ms)
      ✓ returns successful result from borrowBalanceStored with no interest (34436ms)
      ✓ returns successful result from borrowBalanceCurrent with no interest (35381ms)
    borrowBalanceStored
      ✓ returns 0 for account with no borrows (11025ms)
      ✓ returns stored principal when account and market indexes are the same (16695ms)
      ✓ returns calculated balance when market index is higher than account index (16668ms)
      ✓ has undefined behavior when market index is lower than account index (11302ms)
      ✓ reverts on overflow of principal (16619ms)
      ✓ reverts on non-zero stored principal with zero account index (16849ms)
    exchangeRateStored
      ✓ returns initial exchange rate with zero cTokenSupply (25688ms)
      ✓ calculates with single cTokenSupply and single total borrow (26595ms)
      ✓ calculates with cTokenSupply and total borrows (26800ms)
      ✓ calculates with cash and cTokenSupply (27749ms)
      ✓ calculates with cash, borrows, reserves and cTokenSupply (27441ms)
    getCash
      ✓ gets the cash (25180ms)

Test Suites: 1 passed, 1 total
Tests:       26 passed, 26 total
Snapshots:   0 total
Time:        631.288s


Using network test http://localhost:9090/solana
Setup in 63 ms
 PASS  tests/Tokens/compLikeTest.js (55.009s)
  CCompLikeDelegate
    _delegateCompLikeTo
      ✓ does not delegate if not the admin (25752ms)
      ✓ delegates successfully if the admin (27600ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        55.047s


Using network test http://localhost:9090/solana
Setup in 85 ms
 PASS  tests/Tokens/borrowAndRepayTest.js (1005.472s)
  CToken
    borrowFresh
      ✓ fails if comptroller tells it to (19995ms)
      ✓ proceeds if comptroller tells it to (19809ms)
      ✓ fails if market not fresh (19954ms)
      ✓ continues if fresh (20826ms)
      ✓ fails if error if protocol has less than borrowAmount of underlying (18438ms)
      ✓ fails if borrowBalanceStored fails (due to non-zero stored principal with zero account index) (23795ms)
      ✓ fails if calculating account new total borrow balance overflows (23793ms)
      ✓ fails if calculation of new total borrow balance overflows (18525ms)
      ✓ reverts if transfer out fails (19326ms)
      ✓ transfers the underlying cash, tokens, and emits Transfer, Borrow events (18334ms)
      ✓ stores new borrow principal and interest index (24605ms)
      ○ skipped reverts if borrowVerify fails
    borrow
      ✓ emits a borrow failure if interest accrual fails (20418ms)
      ✓ returns error from borrowFresh without emitting any extra logs (19429ms)
      ✓ returns success from borrowFresh and transfers the correct amount (21555ms)
    repayBorrowFresh
      benefactor paying
        ✓ fails if repay is not allowed (26795ms)
        ✓ fails if block number ≠ current block number (26882ms)
        ✓ fails if insufficient approval (27892ms)
        ✓ fails if insufficient balance (26866ms)
        ✓ returns an error if calculating account new account borrow balance fails (31067ms)
        ✓ returns an error if calculation of new total borrow balance fails (26824ms)
        ✓ reverts if doTransferIn fails (26781ms)
        ✓ transfers the underlying cash, and emits Transfer, RepayBorrow events (25898ms)
        ✓ stores new borrow principal and interest index (25861ms)
        ○ skipped reverts if repayBorrowVerify fails
      borrower paying
        ✓ fails if repay is not allowed (26892ms)
        ✓ fails if block number ≠ current block number (25959ms)
        ✓ fails if insufficient approval (26966ms)
        ✓ fails if insufficient balance (26864ms)
        ✓ returns an error if calculating account new account borrow balance fails (31066ms)
        ✓ returns an error if calculation of new total borrow balance fails (26823ms)
        ✓ reverts if doTransferIn fails (26856ms)
        ✓ transfers the underlying cash, and emits Transfer, RepayBorrow events (26793ms)
        ✓ stores new borrow principal and interest index (26812ms)
        ○ skipped reverts if repayBorrowVerify fails
    repayBorrow
      ✓ emits a repay borrow failure if interest accrual fails (27796ms)
      ✓ returns error from repayBorrowFresh without emitting any extra logs (27943ms)
      ✓ returns success from repayBorrowFresh and repays the right amount (28951ms)
      ✓ repays the full amount owed if payer has enough (27898ms)
      ✓ fails gracefully if payer does not have enough (28924ms)
    repayBorrowBehalf
      ✓ emits a repay borrow failure if interest accrual fails (27917ms)
      ✓ returns error from repayBorrowFresh without emitting any extra logs (27846ms)
      ✓ returns success from repayBorrowFresh and repays the right amount (27886ms)

Test Suites: 1 passed, 1 total
Tests:       3 skipped, 40 passed, 43 total
Snapshots:   0 total
Time:        1005.511s


Using network test http://localhost:9090/solana
Setup in 41 ms
 PASS  tests/Tokens/borrowAndRepayCEtherTest.js (617.002s)
  CEther
    borrowFresh
      ✓ fails if comptroller tells it to (16180ms)
      ✓ proceeds if comptroller tells it to (16141ms)
      ✓ fails if market not fresh (16187ms)
      ✓ continues if fresh (17120ms)
      ✓ fails if protocol has less than borrowAmount of underlying (15207ms)
      ✓ fails if borrowBalanceStored fails (due to non-zero stored principal with zero account index) (20648ms)
      ✓ fails if calculating account new total borrow balance overflows (20560ms)
      ✓ fails if calculation of new total borrow balance overflows (16326ms)
      ✓ reverts if transfer out fails (16422ms)
      ✓ transfers the underlying cash, tokens, and emits Borrow event (16590ms)
      ✓ stores new borrow principal and interest index (21678ms)
      ○ skipped reverts if borrowVerify fails
    borrow
      ✓ emits a borrow failure if interest accrual fails (18524ms)
      ✓ refverts in borrowFresh without emitting any extra logs (16744ms)
      ✓ returns success from borrowFresh and transfers the correct amount (19025ms)
    repayBorrowFresh
      benefactor paying
        ✓ fails if repay is not allowed (16635ms)
        ✓ fails if block number ≠ current block number (16852ms)
        ✓ returns an error if calculating account new account borrow balance fails (20926ms)
        ✓ returns an error if calculation of new total borrow balance fails (17007ms)
        ✓ reverts if checkTransferIn fails (15574ms)
        ✓ transfers the underlying cash, and emits RepayBorrow event (16967ms)
        ✓ stores new borrow principal and interest index (16951ms)
        ○ skipped reverts if repayBorrowVerify fails
      borrower paying
        ✓ fails if repay is not allowed (16799ms)
        ✓ fails if block number ≠ current block number (16923ms)
        ✓ returns an error if calculating account new account borrow balance fails (20701ms)
        ✓ returns an error if calculation of new total borrow balance fails (16630ms)
        ✓ reverts if checkTransferIn fails (15627ms)
        ✓ transfers the underlying cash, and emits RepayBorrow event (17113ms)
        ✓ stores new borrow principal and interest index (16998ms)
        ○ skipped reverts if repayBorrowVerify fails
    repayBorrow
      ✓ reverts if interest accrual fails (17742ms)
      ✓ reverts when repay borrow fresh fails (17994ms)
      ✓ returns success from repayBorrowFresh and repays the right amount (18889ms)
      ✓ reverts if overpaying (16803ms)
    repayBorrowBehalf
      ✓ reverts if interest accrual fails (18871ms)
      ✓ reverts from within repay borrow fresh (17738ms)
      ✓ returns success from repayBorrowFresh and repays the right amount (18748ms)

Test Suites: 1 passed, 1 total
Tests:       3 skipped, 35 passed, 38 total
Snapshots:   0 total
Time:        617.031s


Using network test http://localhost:9090/solana
Setup in 74 ms
 PASS  tests/Tokens/adminTest.js (273.789s)
  admin / _setPendingAdmin / _acceptAdmin
    admin()
      ✓ should return correct admin (27271ms)
    pendingAdmin()
      ✓ should return correct pending admin (25713ms)
    _setPendingAdmin()
      ✓ should only be callable by admin (26455ms)
      ✓ should properly set pending admin (27292ms)
      ✓ should properly set pending admin twice (28100ms)
      ✓ should emit event (27001ms)
    _acceptAdmin()
      ✓ should fail when pending admin is zero (26269ms)
      ✓ should fail when called by another account (e.g. root) (27234ms)
      ✓ should succeed and set admin and clear pending admin (28484ms)
      ✓ should emit log on success (27763ms)

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        273.857s


Using network test http://localhost:9090/solana
Setup in 177 ms
 PASS  tests/Tokens/accrueInterestTest.js (198.985s)
  CToken
    accrueInterest
      ✓ reverts if the interest rate is absurdly high (19435ms)
      ✓ fails if new borrow rate calculation fails (19039ms)
      ✓ fails if simple interest factor calculation fails (18087ms)
      ✓ fails if new borrow index calculation fails (17839ms)
      ✓ fails if new borrow interest index calculation fails (19160ms)
      ✓ fails if interest accumulated calculation fails (18736ms)
      ✓ fails if new total borrows calculation fails (20382ms)
      ✓ fails if interest accumulated for reserves calculation fails (21384ms)
      ✓ fails if new total reserves calculation fails (21286ms)
      ✓ succeeds and saves updated values in storage on success (21268ms)

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        199.059s


Using network test http://localhost:9090/solana
Setup in 68 ms
 PASS  tests/Tokens/setInterestRateModelTest.js (270.511s)
  CToken
    _setInterestRateModelFresh
      ✓ fails if called by non-admin (28757ms)
      ✓ fails if market not fresh (29495ms)
      ✓ reverts if passed a contract that doesnot implement isInterestRateModel (29299ms)
      ✓ reverts if passed a contract that implements isInterestRateModel as false (30703ms)
      ✓ accepts new valid interest rate model (29199ms)
      ✓ emits expected log when accepting a new valid interest rate model (29083ms)
    _setInterestRateModel
      ✓ emits a set market interest rate model failure if interest accrual fails (31590ms)
      ✓ reverts from _setInterestRateModelFresh (29279ms)
      ✓ reports success when _setInterestRateModelFresh succeeds (31162ms)

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        270.568s


Using network test http://localhost:9090/solana
Setup in 77 ms
 PASS  tests/Tokens/reservesTest.js (512.136s)
  CToken
    _setReserveFactorFresh
      ✓ rejects change by non-admin (25965ms)
      ✓ rejects change if market not fresh (27152ms)
      ✓ rejects newReserveFactor that descales to 1 (25666ms)
      ✓ accepts newReserveFactor in valid range and emits log (26574ms)
      ✓ accepts a change back to zero (28219ms)
    _setReserveFactor
      ✓ emits a reserve factor failure if interest accrual fails (29442ms)
      ✓ returns error from setReserveFactorFresh without emitting any extra logs (27690ms)
      ✓ returns success from setReserveFactorFresh (30497ms)
    _reduceReservesFresh
      ✓ fails if called by non-admin (29929ms)
      ✓ fails if market not fresh (28941ms)
      ✓ fails if amount exceeds reserves (27985ms)
      ✓ fails if amount exceeds available cash (28895ms)
      ✓ increases admin balance and reduces reserves on success (29066ms)
      ✓ emits an event on success (28993ms)
    _reduceReserves
      ✓ emits a reserve-reduction failure if interest accrual fails (31229ms)
      ✓ returns error from _reduceReservesFresh without emitting any extra logs (29466ms)
      ✓ returns success code from _reduceReservesFresh and reduces the correct amount (31435ms)
    CEther addReserves
      ✓ add reserves for CEther (22870ms)

Test Suites: 1 passed, 1 total
Tests:       18 passed, 18 total
Snapshots:   0 total
Time:        512.205s


Using network test http://localhost:9090/solana
Setup in 67 ms
 PASS  tests/CompilerTest.js (20.496s)
  Const
    ✓ does the right thing and not too expensive (8732ms)
  Structs
    ✓ only writes one slot (10741ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        20.517s


Using network test http://localhost:9090/solana
Setup in 44 ms
 PASS  tests/MaximillionTest.js (109.296s)
  Maximillion
    constructor
      ✓ sets address of cEther (23797ms)
    repayBehalf
      ✓ refunds the entire amount with no borrows (24691ms)
      ✓ repays part of a borrow (30002ms)
      ✓ repays a full borrow and refunds the rest (29994ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        109.314s


Using network test http://localhost:9090/solana
Setup in 38 ms
 PASS  tests/PriceOracleProxyTest.js (969.222s)
  PriceOracleProxy
    constructor
      ✓ sets address of guardian (65632ms)
      ✓ sets address of v1 oracle (67285ms)
      ✓ sets address of cEth (66472ms)
      ✓ sets address of cUSDC (67921ms)
      ✓ sets address of cSAI (67940ms)
      ✓ sets address of cDAI (68288ms)
      ✓ sets address of cUSDT (67824ms)
    getUnderlyingPrice
      ✓ always returns 1e18 for cEth (67745ms)
      ✓ uses address(1) for USDC and address(2) for cdai (70127ms)
      ✓ proxies for whitelisted tokens (70436ms)
      ✓ returns 0 for token without a price (77488ms)
      ✓ correctly handle setting SAI price (70500ms)
      ✓ only guardian may set the sai price (71132ms)
      ✓ sai price must be bounded (69355ms)

Test Suites: 1 passed, 1 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        969.274s


Using network test http://localhost:9090/solana
Setup in 44 ms
 PASS  tests/TimelockTest.js (146.915s)
  Timelock
    constructor
      ✓ sets address of admin (2259ms)
      ✓ sets delay (2259ms)
    setDelay
      ✓ requires msg.sender to be Timelock (2273ms)
    setPendingAdmin
      ✓ requires msg.sender to be Timelock (2270ms)
    acceptAdmin
      ✓ requires msg.sender to be pendingAdmin (3297ms)
      ✓ sets pendingAdmin to address 0 and changes admin (5487ms)
    queueTransaction
      ✓ requires admin to be msg.sender (2256ms)
      ✓ requires eta to exceed delay (2253ms)
      ✓ sets hash as true in queuedTransactions mapping (3286ms)
      ✓ should emit QueueTransaction event (3218ms)
    cancelTransaction
      ✓ requires admin to be msg.sender (3282ms)
      ✓ sets hash from true to false in queuedTransactions mapping (4322ms)
      ✓ should emit CancelTransaction event (4281ms)
    queue and cancel empty
      ✓ can queue and cancel an empty signature and data (4424ms)
    executeTransaction (setDelay)
      ✓ requires admin to be msg.sender (3322ms)
      ✓ requires transaction to be queued (3371ms)
      ✓ requires timestamp to be greater than or equal to eta (3262ms)
      ✓ requires timestamp to be less than eta plus gracePeriod (20393ms)
      ✓ requires target.call transaction to succeed (6447ms)
      ✓ sets hash from true to false in queuedTransactions mapping, updates delay, and emits ExecuteTransaction event (16612ms)
    executeTransaction (setPendingAdmin)
      ✓ requires admin to be msg.sender (3402ms)
      ✓ requires transaction to be queued (3329ms)
      ✓ requires timestamp to be greater than or equal to eta (3306ms)
      ✓ requires timestamp to be less than eta plus gracePeriod (20442ms)
      ✓ sets hash from true to false in queuedTransactions mapping, updates admin, and emits ExecuteTransaction event (16682ms)

Test Suites: 1 passed, 1 total
Tests:       25 passed, 25 total
Snapshots:   0 total
Time:        146.946s, estimated 147s


Using network test http://localhost:9090/solana
Setup in 64 ms
 PASS  tests/Models/DAIInterestRateModelTest.js (498.194s)
  DAIInterestRateModelV3
    constructor
      ○ skipped sets jug and ilk address and pokes
    getBorrowRate
      ✓ calculates correct borrow value for dsr=2%, duty=5%, base=0.5%, jump=0.8, cash=500, borrows=100, reserves=0 (6829ms)
      ✓ calculates correct borrow value for dsr=2%, duty=5%, base=0.5%, jump=0.8, cash=1000, borrows=900, reserves=0 (6921ms)
      ✓ calculates correct borrow value for dsr=2%, duty=5%, base=0.5%, jump=0.8, cash=1000, borrows=950, reserves=0 (6891ms)
      ✓ calculates correct borrow value for dsr=2%, duty=5%, base=0.5%, jump=0.8, cash=500, borrows=100, reserves=0 (6714ms)
      ✓ calculates correct borrow value for dsr=2%, duty=5%, base=0.5%, jump=0.8, cash=3000000000000000000, borrows=5000000000000000000, reserves=0 (6665ms)
      ✓ calculates correct borrow value for dsr=2%, duty=5%, base=0.5%, jump=0.8, cash=5000000000000000000, borrows=3000000000000000000, reserves=0 (6662ms)
      ✓ calculates correct borrow value for dsr=2%, duty=5%, base=0.5%, jump=0.8, cash=500, borrows=3000000000000000000, reserves=0 (6840ms)
      ✓ calculates correct borrow value for dsr=2%, duty=5%, base=0.5%, jump=0.8, cash=0, borrows=500, reserves=0 (6756ms)
      ✓ calculates correct borrow value for dsr=2%, duty=5%, base=0.5%, jump=0.8, cash=0, borrows=500, reserves=100 (7072ms)
      ✓ calculates correct borrow value for dsr=2%, duty=5%, base=0.5%, jump=0.8, cash=500, borrows=0, reserves=0 (6824ms)
      ✓ calculates correct borrow value for dsr=2%, duty=5%, base=0.5%, jump=0.8, cash=0, borrows=0, reserves=0 (6784ms)
      ✓ calculates correct borrow value for dsr=2%, duty=5%, base=0.5%, jump=0.8, cash=3000000000000000000, borrows=500, reserves=0 (6766ms)
      ✓ calculates correct borrow value for dsr=5.5%, duty=18%, base=0.5%, jump=0.8, cash=500, borrows=100, reserves=0 (6888ms)
      ✓ calculates correct borrow value for dsr=5.5%, duty=18%, base=0.5%, jump=0.8, cash=1000, borrows=900, reserves=0 (6655ms)
      ✓ calculates correct borrow value for dsr=5.5%, duty=18%, base=0.5%, jump=0.8, cash=1000, borrows=950, reserves=0 (6840ms)
      ✓ calculates correct borrow value for dsr=5.5%, duty=18%, base=0.5%, jump=0.8, cash=500, borrows=100, reserves=0 (6687ms)
      ✓ calculates correct borrow value for dsr=5.5%, duty=18%, base=0.5%, jump=0.8, cash=3000000000000000000, borrows=5000000000000000000, reserves=0 (6716ms)
      ✓ calculates correct borrow value for dsr=5.5%, duty=18%, base=0.5%, jump=0.8, cash=5000000000000000000, borrows=3000000000000000000, reserves=0 (6945ms)
      ✓ calculates correct borrow value for dsr=5.5%, duty=18%, base=0.5%, jump=0.8, cash=500, borrows=3000000000000000000, reserves=0 (6805ms)
      ✓ calculates correct borrow value for dsr=5.5%, duty=18%, base=0.5%, jump=0.8, cash=0, borrows=500, reserves=0 (6819ms)
      ✓ calculates correct borrow value for dsr=5.5%, duty=18%, base=0.5%, jump=0.8, cash=0, borrows=500, reserves=100 (6795ms)
      ✓ calculates correct borrow value for dsr=5.5%, duty=18%, base=0.5%, jump=0.8, cash=500, borrows=0, reserves=0 (7230ms)
      ✓ calculates correct borrow value for dsr=5.5%, duty=18%, base=0.5%, jump=0.8, cash=0, borrows=0, reserves=0 (6792ms)
      ✓ calculates correct borrow value for dsr=5.5%, duty=18%, base=0.5%, jump=0.8, cash=3000000000000000000, borrows=500, reserves=0 (6862ms)
      ✓ calculates correct borrow value for dsr=0%, duty=10%, base=0.5%, jump=0.8, cash=500, borrows=100, reserves=0 (6774ms)
      ✓ calculates correct borrow value for dsr=0%, duty=10%, base=0.5%, jump=0.8, cash=1000, borrows=900, reserves=0 (6846ms)
      ✓ calculates correct borrow value for dsr=0%, duty=10%, base=0.5%, jump=0.8, cash=1000, borrows=950, reserves=0 (6759ms)
      ✓ calculates correct borrow value for dsr=0%, duty=10%, base=0.5%, jump=0.8, cash=500, borrows=100, reserves=0 (7181ms)
      ✓ calculates correct borrow value for dsr=0%, duty=10%, base=0.5%, jump=0.8, cash=3000000000000000000, borrows=5000000000000000000, reserves=0 (6838ms)
      ✓ calculates correct borrow value for dsr=0%, duty=10%, base=0.5%, jump=0.8, cash=5000000000000000000, borrows=3000000000000000000, reserves=0 (6810ms)
      ✓ calculates correct borrow value for dsr=0%, duty=10%, base=0.5%, jump=0.8, cash=500, borrows=3000000000000000000, reserves=0 (6806ms)
      ✓ calculates correct borrow value for dsr=0%, duty=10%, base=0.5%, jump=0.8, cash=0, borrows=500, reserves=0 (6731ms)
      ✓ calculates correct borrow value for dsr=0%, duty=10%, base=0.5%, jump=0.8, cash=0, borrows=500, reserves=100 (6894ms)
      ✓ calculates correct borrow value for dsr=0%, duty=10%, base=0.5%, jump=0.8, cash=500, borrows=0, reserves=0 (6808ms)
      ✓ calculates correct borrow value for dsr=0%, duty=10%, base=0.5%, jump=0.8, cash=0, borrows=0, reserves=0 (6871ms)
      ✓ calculates correct borrow value for dsr=0%, duty=10%, base=0.5%, jump=0.8, cash=3000000000000000000, borrows=500, reserves=0 (6772ms)
    getSupplyRate
      ✓ calculates correct supply value for dsr=2%, duty=5%, base=0.5%, cash=500, borrows=100, reserves=0 (6810ms)
      ✓ calculates correct supply value for dsr=2%, duty=5%, base=0.5%, cash=1000, borrows=900, reserves=0 (6668ms)
      ✓ calculates correct supply value for dsr=2%, duty=5%, base=0.5%, cash=1000, borrows=950, reserves=0 (6923ms)
      ✓ calculates correct supply value for dsr=2%, duty=5%, base=0.5%, cash=500, borrows=100, reserves=0 (6766ms)
      ✓ calculates correct supply value for dsr=2%, duty=5%, base=0.5%, cash=3000000000000000000, borrows=5000000000000000000, reserves=0 (7101ms)
      ✓ calculates correct supply value for dsr=2%, duty=5%, base=0.5%, cash=5000000000000000000, borrows=3000000000000000000, reserves=0 (6642ms)
      ✓ calculates correct supply value for dsr=2%, duty=5%, base=0.5%, cash=500, borrows=3000000000000000000, reserves=0 (6905ms)
      ✓ calculates correct supply value for dsr=2%, duty=5%, base=0.5%, cash=0, borrows=500, reserves=0 (6852ms)
      ✓ calculates correct supply value for dsr=2%, duty=5%, base=0.5%, cash=0, borrows=500, reserves=100 (6882ms)
      ✓ calculates correct supply value for dsr=2%, duty=5%, base=0.5%, cash=500, borrows=0, reserves=0 (6785ms)
      ✓ calculates correct supply value for dsr=2%, duty=5%, base=0.5%, cash=0, borrows=0, reserves=0 (6691ms)
      ✓ calculates correct supply value for dsr=2%, duty=5%, base=0.5%, cash=3000000000000000000, borrows=500, reserves=0 (6736ms)
      ✓ calculates correct supply value for dsr=5.5%, duty=18%, base=0.5%, cash=500, borrows=100, reserves=0 (6710ms)
      ✓ calculates correct supply value for dsr=5.5%, duty=18%, base=0.5%, cash=1000, borrows=900, reserves=0 (6738ms)
      ✓ calculates correct supply value for dsr=5.5%, duty=18%, base=0.5%, cash=1000, borrows=950, reserves=0 (6695ms)
      ✓ calculates correct supply value for dsr=5.5%, duty=18%, base=0.5%, cash=500, borrows=100, reserves=0 (6847ms)
      ✓ calculates correct supply value for dsr=5.5%, duty=18%, base=0.5%, cash=3000000000000000000, borrows=5000000000000000000, reserves=0 (6782ms)
      ✓ calculates correct supply value for dsr=5.5%, duty=18%, base=0.5%, cash=5000000000000000000, borrows=3000000000000000000, reserves=0 (6976ms)
      ✓ calculates correct supply value for dsr=5.5%, duty=18%, base=0.5%, cash=500, borrows=3000000000000000000, reserves=0 (6818ms)
      ✓ calculates correct supply value for dsr=5.5%, duty=18%, base=0.5%, cash=0, borrows=500, reserves=0 (6836ms)
      ✓ calculates correct supply value for dsr=5.5%, duty=18%, base=0.5%, cash=0, borrows=500, reserves=100 (6686ms)
      ✓ calculates correct supply value for dsr=5.5%, duty=18%, base=0.5%, cash=500, borrows=0, reserves=0 (6725ms)
      ✓ calculates correct supply value for dsr=5.5%, duty=18%, base=0.5%, cash=0, borrows=0, reserves=0 (7066ms)
      ✓ calculates correct supply value for dsr=5.5%, duty=18%, base=0.5%, cash=3000000000000000000, borrows=500, reserves=0 (6848ms)
      ✓ calculates correct supply value for dsr=0%, duty=10%, base=0.5%, cash=500, borrows=100, reserves=0 (6815ms)
      ✓ calculates correct supply value for dsr=0%, duty=10%, base=0.5%, cash=1000, borrows=900, reserves=0 (6725ms)
      ✓ calculates correct supply value for dsr=0%, duty=10%, base=0.5%, cash=1000, borrows=950, reserves=0 (6783ms)
      ✓ calculates correct supply value for dsr=0%, duty=10%, base=0.5%, cash=500, borrows=100, reserves=0 (6691ms)
      ✓ calculates correct supply value for dsr=0%, duty=10%, base=0.5%, cash=3000000000000000000, borrows=5000000000000000000, reserves=0 (6965ms)
      ✓ calculates correct supply value for dsr=0%, duty=10%, base=0.5%, cash=5000000000000000000, borrows=3000000000000000000, reserves=0 (7192ms)
      ✓ calculates correct supply value for dsr=0%, duty=10%, base=0.5%, cash=500, borrows=3000000000000000000, reserves=0 (6770ms)
      ✓ calculates correct supply value for dsr=0%, duty=10%, base=0.5%, cash=0, borrows=500, reserves=0 (6707ms)
      ✓ calculates correct supply value for dsr=0%, duty=10%, base=0.5%, cash=0, borrows=500, reserves=100 (6757ms)
      ✓ calculates correct supply value for dsr=0%, duty=10%, base=0.5%, cash=500, borrows=0, reserves=0 (6762ms)
      ✓ calculates correct supply value for dsr=0%, duty=10%, base=0.5%, cash=0, borrows=0, reserves=0 (6831ms)
      ✓ calculates correct supply value for dsr=0%, duty=10%, base=0.5%, cash=3000000000000000000, borrows=500, reserves=0 (6924ms)

Test Suites: 1 passed, 1 total
Tests:       1 skipped, 72 passed, 73 total
Snapshots:   0 total
Time:        498.259s


Using network test http://localhost:9090/solana
Setup in 56 ms
 PASS  tests/Models/InterestRateModelTest.js (65.129s)
  InterestRateModel
    baseP025-slopeP20
      ✓ isInterestRateModel (27ms)
      ✓ calculates correct borrow value (226ms)
    jump rate tests
      chosen points
        for jump=100, kink=90, base=10, slope=20
          ✓ and util=0% (49ms)
          ✓ and util=10% (35ms)
          ✓ and util=89% (35ms)
          ✓ and util=90% (35ms)
          ✓ and util=91% (29ms)
          ✓ and util=100% (26ms)
          ✓ and util=0% (49ms)
          ✓ and util=10% (41ms)
          ✓ and util=89% (27ms)
          ✓ and util=90% (27ms)
          ✓ and util=91% (25ms)
          ✓ and util=100% (52ms)
          ✓ and util=0% (29ms)
          ✓ and util=10% (25ms)
          ✓ and util=89% (30ms)
          ✓ and util=90% (43ms)
          ✓ and util=91% (31ms)
          ✓ and util=100% (34ms)
          ✓ and util=0% (32ms)
          ✓ and util=10% (37ms)
          ✓ and util=89% (51ms)
          ✓ and util=90% (24ms)
          ✓ and util=91% (42ms)
          ✓ and util=100% (39ms)
        for jump=20, kink=90, base=10, slope=20
          ✓ and util=0% (29ms)
          ✓ and util=10% (34ms)
          ✓ and util=100% (84ms)
          ✓ and util=0% (24ms)
          ✓ and util=10% (22ms)
          ✓ and util=100% (26ms)
          ✓ and util=0% (30ms)
          ✓ and util=10% (27ms)
          ✓ and util=100% (30ms)
          ✓ and util=0% (41ms)
          ✓ and util=10% (32ms)
          ✓ and util=100% (31ms)
        for jump=0, kink=90, base=10, slope=20
          ✓ and util=0% (48ms)
          ✓ and util=10% (36ms)
          ✓ and util=100% (30ms)
          ✓ and util=0% (33ms)
          ✓ and util=10% (68ms)
          ✓ and util=100% (51ms)
          ✓ and util=0% (34ms)
          ✓ and util=10% (22ms)
          ✓ and util=100% (29ms)
          ✓ and util=0% (32ms)
          ✓ and util=10% (36ms)
          ✓ and util=100% (29ms)
        for jump=0, kink=110, base=10, slope=20
          ✓ and util=0% (28ms)
          ✓ and util=10% (25ms)
          ✓ and util=100% (29ms)
          ✓ and util=0% (31ms)
          ✓ and util=10% (28ms)
          ✓ and util=100% (27ms)
          ✓ and util=0% (25ms)
          ✓ and util=10% (38ms)
          ✓ and util=100% (34ms)
          ✓ and util=0% (25ms)
          ✓ and util=10% (26ms)
          ✓ and util=100% (36ms)
        for jump=2000, kink=0, base=10, slope=20
          ✓ and util=0% (48ms)
          ✓ and util=10% (28ms)
          ✓ and util=100% (31ms)
          ✓ and util=0% (34ms)
          ✓ and util=10% (28ms)
          ✓ and util=100% (48ms)
          ✓ and util=0% (40ms)
          ✓ and util=10% (41ms)
          ✓ and util=100% (29ms)
          ✓ and util=0% (30ms)
          ✓ and util=10% (30ms)
          ✓ and util=100% (28ms)
    baseP05-slopeP45
      ✓ isInterestRateModel (23ms)
      ✓ calculates correct borrow value (153ms)
    white-paper
      ✓ isInterestRateModel (45ms)
      ✓ calculates correct borrow value (154ms)
    jump-rate
      ✓ isInterestRateModel (54ms)
      ✓ calculates correct borrow value (158ms)
      ✓ handles overflowed cash + borrows (47ms)
      ✓ handles failing to get exp of borrows / cash + borrows (34ms)
      ✓ handles overflow utilization rate times slope (2450ms)
      ✓ handles overflow utilization rate times slope + base (2385ms)

Test Suites: 1 passed, 1 total
Tests:       84 passed, 84 total
Snapshots:   0 total
Time:        65.161s


Using network test http://localhost:9090/solana
Setup in 44 ms
 PASS  tests/Lens/CompoundLensTest.js (396.954s)
  CompoundLens
    cTokenMetadata
      ✓ is correct for a cErc20 (27330ms)
      ✓ is correct for cEth (21720ms)
      ✓ is correct for cErc20 with set comp speeds (29415ms)
    cTokenMetadataAll
      ✓ is correct for a cErc20 and cEther (47882ms)
    cTokenBalances
      ✓ is correct for cERC20 (26182ms)
      ✓ is correct for cETH (22686ms)
    cTokenBalancesAll
      ✓ is correct for cEth and cErc20 (48356ms)
    cTokenUnderlyingPrice
      ✓ gets correct price for cErc20 (27644ms)
      ✓ gets correct price for cEth (23358ms)
    cTokenUnderlyingPriceAll
      ✓ gets correct price for both (48605ms)
    getAccountLimits
      ✓ gets correct values (18657ms)
    governance
      getGovReceipts
        ✓ gets correct values (9164ms)
      getGovProposals
        ✓ gets correct values (9085ms)
    comp
      getCompBalanceMetadata
        ✓ gets correct values (4414ms)
      getCompBalanceMetadataExt
        ✓ gets correct values (21882ms)
      getCompVotes
        ✓ gets correct values (4734ms)
        ✓ reverts on future value (4601ms)

Test Suites: 1 passed, 1 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        396.989s, estimated 410s


Using network test http://localhost:9090/solana
Setup in 37 ms

 PASS  tests/Flywheel/FlywheelTest.js (3671.291s)
  Flywheel upgrade
    becomes the comptroller
      ○ skipped adds the comp markets
      ○ skipped adds the other markets
      ○ skipped _supportMarket() adds to all markets, and only once
  Flywheel
    _grantComp()
      ✓ should award comp if called by admin (72544ms)
      ✓ should revert if not called by admin (71290ms)
      ✓ should revert if insufficient comp (71378ms)
    getCompMarkets()
      ✓ should return the comp markets (73275ms)
    _setCompSpeeds()
      ✓ should update market index when calling setCompSpeed (75640ms)
      ✓ should correctly drop a comp market if called by admin (74557ms)
      ✓ should correctly drop a comp market from middle of array (74717ms)
      ✓ should not drop a comp market unless called by admin (73950ms)
      ✓ should not add non-listed markets (79721ms)
    updateCompBorrowIndex()
      ✓ should calculate comp borrower index correctly (75056ms)
      ✓ should not revert or update compBorrowState index if cToken not in COMP markets (83124ms)
      ✓ should not update index if no blocks passed since last accrual (73785ms)
      ✓ should not update index if comp speed is 0 (74949ms)
    updateCompSupplyIndex()
      ✓ should calculate comp supplier index correctly (75739ms)
      ✓ should not update index on non-COMP markets (84295ms)
      ✓ should not update index if no blocks passed since last accrual (76638ms)
      ○ skipped should not matter if the index is updated multiple times
    distributeBorrowerComp()
      ✓ should update borrow index checkpoint but not compAccrued for first time user (74722ms)
      ✓ should transfer comp and update borrow index checkpoint correctly for repeat time user (77532ms)
      ✓ should not transfer comp automatically (76843ms)
      ✓ should not revert or distribute when called with non-COMP market (83248ms)
    distributeSupplierComp()
      ✓ should transfer comp and update supply index correctly for first time user (76616ms)
      ✓ should update comp accrued and supply index for repeat user (78702ms)
      ✓ should not transfer when compAccrued below threshold (76177ms)
      ✓ should not revert or distribute when called with non-COMP market (83653ms)
    transferComp
      ✓ should transfer comp accrued when amount is above threshold (78467ms)
      ✓ should not transfer when comp accrued is below threshold (80521ms)
      ✓ should not transfer comp if comp accrued is greater than comp remaining (80082ms)
    claimComp
      ✓ should accrue comp and then transfer comp accrued in a single market (93110ms)
      ✓ should claim when comp accrued is below threshold (79927ms)
      ✓ should revert when a market is not listed (85076ms)
      ○ skipped should accrue comp and then transfer comp accrued
    claimComp batch
      ✓ should revert when a market is not listed (86227ms)
      ○ skipped should revert when claiming comp from non-listed market
      ○ skipped should claim the expected amount when holders and ctokens arg is duplicated
      ○ skipped claims comp for multiple suppliers only
      ○ skipped claims comp for multiple borrowers only, primes uninitiated
    harnessRefreshCompSpeeds
      ✓ should start out 0 (76997ms)
      ✓ should get correct speeds with borrows (81324ms)
      ✓ should get correct speeds for 2 assets (88468ms)
    harnessSetCompSpeeds
      ✓ should correctly set differing COMP supply and borrow speeds (76914ms)
      ✓ should correctly get differing COMP supply and borrow speeds for 4 assets (100025ms)
      ✓ should accrue comp correctly with only supply-side rewards (97119ms)
      ✓ should accrue comp correctly with only borrow-side rewards (98130ms)
    harnessAddCompMarkets
      ✓ should correctly add a comp market if called by admin (90945ms)
      ✓ should not write over a markets existing state (84638ms)
    updateContributorRewards
      ✓ should not fail when contributor rewards called on non-contributor (78480ms)
      ✓ should accrue comp to contributors (76404ms)
      ✓ should accrue comp with late set (76770ms)
    _setContributorCompSpeed
      ✓ should revert if not called by admin (73197ms)
      ✓ should start comp stream if called by admin (71968ms)
      ✓ should reset comp stream if set to 0 (76917ms)

Test Suites: 1 passed, 1 total
Tests:       9 skipped, 46 passed, 55 total
Snapshots:   0 total
Time:        3671.346s, estimated 4253s


Using network test http://localhost:9090/solana
Setup in 40 ms
 PASS  tests/Comptroller/accountLiquidityTest.js (200.343s)
  Comptroller
    liquidity
      ✓ fails if a price has not been set (27601ms)
      ✓ allows a borrow up to collateralFactor, but not more (33976ms)
      ✓ allows entering 3 markets, supplying to 2 and borrowing up to collateralFactor in the 3rd (61581ms)
    getAccountLiquidity
      ✓ returns 0 if not 'in' any markets (16297ms)
    getHypotheticalAccountLiquidity
      ✓ returns 0 if not 'in' any markets (25985ms)
      ✓ returns collateral factor times dollar amount of tokens minted in a single market (33944ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        200.367s


Using network test http://localhost:9090/solana
Setup in 60 ms
 PASS  tests/Comptroller/adminTest.js (38.006s)
  admin / _setPendingAdmin / _acceptAdmin
    admin()
      ✓ should return correct admin (2488ms)
    pendingAdmin()
      ✓ should return correct pending admin (2410ms)
    _setPendingAdmin()
      ✓ should only be callable by admin (3343ms)
      ✓ should properly set pending admin (3369ms)
      ✓ should properly set pending admin twice (4448ms)
      ✓ should emit event (3375ms)
    _acceptAdmin()
      ✓ should fail when pending admin is zero (3425ms)
      ✓ should fail when called by another account (e.g. root) (4395ms)
      ✓ should succeed and set admin and clear pending admin (4411ms)
      ✓ should emit log on success (4341ms)

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        38.057s


Using network test http://localhost:9090/solana
Setup in 56 ms
 PASS  tests/Comptroller/comptrollerTest.js (469.676s)
  Comptroller
    constructor
      ✓ on success it sets admin to creator and pendingAdmin is unset (17879ms)
      ✓ on success it sets closeFactor as specified (16310ms)
    _setLiquidationIncentive
      ✓ fails if called by non-admin (17615ms)
      ✓ accepts a valid incentive and emits a NewLiquidationIncentive event (17691ms)
    _setPriceOracle
      ✓ fails if called by non-admin (20306ms)
      ✓ accepts a valid price oracle and emits a NewPriceOracle event (21506ms)
      ○ skipped reverts if passed a contract that doesnot implement isPriceOracle
      ○ skipped reverts if passed a contract that implements isPriceOracle as false
    _setCloseFactor
      ✓ fails if not called by admin (26119ms)
    _setCollateralFactor
      ✓ fails if not called by admin (27072ms)
      ✓ fails if asset is not listed (27516ms)
      ✓ fails if factor is set without an underlying price (28739ms)
      ✓ succeeds and sets market (29473ms)
    _supportMarket
      ✓ fails if not called by admin (27759ms)
      ✓ fails if asset is not a CToken (18813ms)
      ✓ succeeds and sets market (27026ms)
      ✓ cannot list a market a second time (28240ms)
      ✓ can list two different markets (37585ms)
    redeemVerify
      ✓ should allow you to redeem 0 underlying for 0 tokens (26353ms)
      ✓ should allow you to redeem 5 underlyig for 5 tokens (26079ms)
      ✓ should not allow you to redeem 5 underlying for 0 tokens (25844ms)

Test Suites: 1 passed, 1 total
Tests:       2 skipped, 19 passed, 21 total
Snapshots:   0 total
Time:        469.712s


Using network test http://localhost:9090/solana
Setup in 40 ms
 PASS  tests/Comptroller/liquidateCalculateAmountSeizeTest.js (412.504s)
  Comptroller
    liquidateCalculateAmountSeize
      ✓ fails if either asset price is 0 (39652ms)
      ✓ fails if the repayAmount causes overflow  (37982ms)
      ✓ fails if the borrowed asset price causes overflow  (39232ms)
      ✓ reverts if it fails to calculate the exchange rate (39840ms)
      ✓ returns the correct value for 1000000000000000000,1000000000000000000,1000000000000000000,1000000000000000000,1000000000000000000 (42785ms)
      ✓ returns the correct value for 2000000000000000000,1000000000000000000,1000000000000000000,1000000000000000000,1000000000000000000 (42804ms)
      ✓ returns the correct value for 2000000000000000000,2000000000000000000,1420000000000000000,1300000000000000000,2450000000000000000 (41714ms)
      ✓ returns the correct value for 2789000000000000000,5230480842000000000,771320000000000000000,1300000000000000000,1.000245e+22 (41875ms)
      ✓ returns the correct value for 7.009232529961056e+24,2.5278726317240445e+24,2.6177112093242585e+23,1179713989619784000,7.790468414639561e+24 (42693ms)
      ✓ returns the correct value for 8.597530356731944e+24,3.2799680470004635e+24,1.1288828544121255e+24,1443701188135764700,1.7207477417760232e+24 (42748ms)

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        412.533s


Using network test http://localhost:9090/solana
Setup in 58 ms
 PASS  tests/Comptroller/pauseGuardianTest.js (469.261s)
  Comptroller
    _setPauseGuardian
      failing
        ✓ emits a failure log if not sent by admin (18956ms)
        ✓ does not change the pause guardian (17816ms)
      succesfully changing pause guardian
        ✓ emits new pause guardian event (34831ms)
        ✓ changes pending pause guardian (35880ms)
    setting paused
      succeeding
        ✓ only pause guardian or admin can pause Transfer (28071ms)
        ✓ PauseGuardian can pause of TransferGuardianPaused (31844ms)
        ✓ pauses Transfer (29551ms)
        ✓ only pause guardian or admin can pause Seize (28553ms)
        ✓ PauseGuardian can pause of SeizeGuardianPaused (30604ms)
        ✓ pauses Seize (29933ms)
        ✓ only pause guardian or admin can pause Borrow (28835ms)
        ✓ PauseGuardian can pause of BorrowGuardianPaused (31592ms)
        ✓ pauses Borrow (29972ms)
        ✓ only pause guardian or admin can pause Mint (29374ms)
        ✓ PauseGuardian can pause of MintGuardianPaused (31660ms)
        ✓ pauses Mint (29648ms)

Test Suites: 1 passed, 1 total
Tests:       16 passed, 16 total
Snapshots:   0 total
Time:        469.307s

```
