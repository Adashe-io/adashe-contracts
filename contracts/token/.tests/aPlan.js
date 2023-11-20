/**
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
