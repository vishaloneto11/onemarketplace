import {
  TransferTransaction,
  AccountId,
  PrivateKey,
  Client,
  Hbar,
} from "@hashgraph/sdk";

async function tokenTransferfcn(
  walletData,
  accountId,
  Tid,
  Tkey,
  Token,
  serial
) {
  console.log(
    `Creating HTS token-------------------------------------------------`
  );
  const hashconnect = walletData[0];
  const saveData = walletData[1];
  const provider = hashconnect.getProvider(
    "testnet",
    saveData.topic,
    accountId
  );
  const signer = hashconnect.getSigner(provider);
  const aliceId = AccountId.fromString(accountId);
  const tokenId = Token;
  const treasuryId = AccountId.fromString(Tid);
  const treasuryKey = PrivateKey.fromStringECDSA(Tkey);
  const client = Client.forTestnet().setOperator(treasuryId, treasuryKey);

  let tokenTransferTx = await new TransferTransaction()
    .addNftTransfer(tokenId, serial, treasuryId, aliceId)
    .addHbarTransfer(aliceId, -1)
    .addHbarTransfer(treasuryId, 1)
    .freezeWith(client)
    .sign(treasuryKey);

  // ################################################
  console.log(tokenTransferTx);
  // const signTx = await tokenTransferTx.signWithSigner(signer);
  const txResponse = await tokenTransferTx.executeWithSigner(signer);
  console.log(txResponse);
}

export default tokenTransferfcn;
