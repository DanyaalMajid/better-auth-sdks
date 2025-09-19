# SiweNoncePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet_address** | **str** |  | 
**chain_id** | **str** |  | 

## Example

```python
from better_auth.models.siwe_nonce_post_request import SiweNoncePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SiweNoncePostRequest from a JSON string
siwe_nonce_post_request_instance = SiweNoncePostRequest.from_json(json)
# print the JSON string representation of the object
print(SiweNoncePostRequest.to_json())

# convert the object into a dict
siwe_nonce_post_request_dict = siwe_nonce_post_request_instance.to_dict()
# create an instance of SiweNoncePostRequest from a dict
siwe_nonce_post_request_from_dict = SiweNoncePostRequest.from_dict(siwe_nonce_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


