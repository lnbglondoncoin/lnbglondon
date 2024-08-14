import { WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { WalletModalProvider, WalletActionButton } from '@tronweb3/tronwallet-adapter-react-ui';
function TronLink() {
    const onError = useCallback((e) => {
        // handle error here
    }, []);
    return (
        <WalletProvider onError={onError}>
            <WalletModalProvider>
                <WalletActionButton></WalletActionButton>
            </WalletModalProvider>
        </WalletProvider>
    );
}