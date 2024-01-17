/**
 
    // Verifying contracts (without args): npx hardhat verify --network goerli 0xb913c3Ba88E507C98f9e8f6Bbb45dE1Ce707126B
    // Verifying contracts (with args): npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
    // Check an address' nonce: npx hardhat account --address 0xd5b1aa8077F6a7D0CeA83Ac81AAb3EC018Aa2c1A
    // Change msg.sender to avoid Factory contract from becoming the Contract Owner


    TASKS:
        ** Deduct fee from trasfer (DONE)
        ** Mint tokens to owner (DONE)
        ** Add deducted fee to total fee (DONE)
        ** enable owner withdraw fees (DONE)
        ** Split fee then add first half to contract balance (ready to be withdrawn by owner) (DONE)
        ** exclude owner and this contract from fee (DONE)
        ** Distribute second half to all holders (DONE)


        - Implement adding / excluding of rewards
        - prevent owner from revoking ownership

        ** BUG: exclude contract from paying fees (FIXED)
        ** BUG: grant owner permission to exclude addresses from paying fees (FIXED)
        ** BUG: grant owner permission to include addresses to pay fees (FIXED)
        
        - gas concern (always sending fees on every tx)
*/

//========================= VESTING ========================= //
/** TASKS:

    ** create a struct to track each beneficiary's (allocation) [DONE]
    ** enable owner add new recipients / allocations [DONE]
    ** enable owner remove recipients [DONE]

*/
