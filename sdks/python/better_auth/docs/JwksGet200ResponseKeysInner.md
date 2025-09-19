# JwksGet200ResponseKeysInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kid** | **str** | Key ID uniquely identifying the key, corresponds to the &#39;id&#39; from the stored Jwk | 
**kty** | **str** | Key type (e.g., &#39;RSA&#39;, &#39;EC&#39;, &#39;OKP&#39;) | 
**alg** | **str** | Algorithm intended for use with the key (e.g., &#39;EdDSA&#39;, &#39;RS256&#39;) | 
**use** | **str** | Intended use of the public key (e.g., &#39;sig&#39; for signature) | [optional] 
**n** | **str** | Modulus for RSA keys (base64url-encoded) | [optional] 
**e** | **str** | Exponent for RSA keys (base64url-encoded) | [optional] 
**crv** | **str** | Curve name for elliptic curve keys (e.g., &#39;Ed25519&#39;, &#39;P-256&#39;) | [optional] 
**x** | **str** | X coordinate for elliptic curve keys (base64url-encoded) | [optional] 
**y** | **str** | Y coordinate for elliptic curve keys (base64url-encoded) | [optional] 

## Example

```python
from better_auth.models.jwks_get200_response_keys_inner import JwksGet200ResponseKeysInner

# TODO update the JSON string below
json = "{}"
# create an instance of JwksGet200ResponseKeysInner from a JSON string
jwks_get200_response_keys_inner_instance = JwksGet200ResponseKeysInner.from_json(json)
# print the JSON string representation of the object
print(JwksGet200ResponseKeysInner.to_json())

# convert the object into a dict
jwks_get200_response_keys_inner_dict = jwks_get200_response_keys_inner_instance.to_dict()
# create an instance of JwksGet200ResponseKeysInner from a dict
jwks_get200_response_keys_inner_from_dict = JwksGet200ResponseKeysInner.from_dict(jwks_get200_response_keys_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


