import { NodeOAuthClient, OAuthClientMetadataInput } from '@atproto/oauth-client-node';

export function blueskyClientMetadata(): OAuthClientMetadataInput {
    const baseUrl: string = process.env.NEXT_PUBLIC_URL as string;

    return {
        client_name: 'Bluesky Besties',
        client_id: `${baseUrl}/client-metadata.json`,
        client_uri: `${baseUrl}`,
        redirect_uris: [`${baseUrl}/oauth/callback`],
        policy_uri: `${baseUrl}/policy`,
        tos_uri: `${baseUrl}/tos`,
        scope: 'atproto transition:generic',
        grant_types: ['authorization_code', 'refresh_token'],
        response_types: ['code'],
        application_type: 'web',
        token_endpoint_auth_method: 'none',
        dpop_bound_access_tokens: true,
    };
}

const create_client = async (): Promise<NodeOAuthClient> =>
    new NodeOAuthClient({
        clientMetadata: blueskyClientMetadata(),
        stateStore: {
            // @ts-ignore
            async set(key: string, internalState: NodeSavedState): Promise<void> {},
            // @ts-ignore
            async get(key: string): Promise<NodeSavedState | undefined> {},
            async del(key: string): Promise<void> {},
        },
        sessionStore: {
            // @ts-ignore
            async set(sub: string, session: Session): Promise<void> {},
            // @ts-ignore
            async get(sub: string): Promise<Session | undefined> {},
            async del(sub: string): Promise<void> {},
        },

        // A lock to prevent concurrent access to the session store. Optional if only one instance is running.
        // requestLock,
    });

export default create_client;
