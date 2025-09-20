# SiweVerifyPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**signature** | **str** |  | 
**wallet_address** | **str** |  | 
**chain_id** | **str** |  | 
**email** | **str** |  | [optional] 

## Example

```python
from better_auth.models.siwe_verify_post_request import SiweVerifyPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SiweVerifyPostRequest from a JSON string
siwe_verify_post_request_instance = SiweVerifyPostRequest.from_json(json)
# print the JSON string representation of the object
print(SiweVerifyPostRequest.to_json())

# convert the object into a dict
siwe_verify_post_request_dict = siwe_verify_post_request_instance.to_dict()
# create an instance of SiweVerifyPostRequest from a dict
siwe_verify_post_request_from_dict = SiweVerifyPostRequest.from_dict(siwe_verify_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


