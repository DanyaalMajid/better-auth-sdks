# WalletAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**user_id** | **str** |  | 
**address** | **str** |  | 
**chain_id** | **float** |  | 
**is_primary** | **bool** |  | [optional] [default to False]
**created_at** | **str** |  | 

## Example

```python
from better_auth.models.wallet_address import WalletAddress

# TODO update the JSON string below
json = "{}"
# create an instance of WalletAddress from a JSON string
wallet_address_instance = WalletAddress.from_json(json)
# print the JSON string representation of the object
print(WalletAddress.to_json())

# convert the object into a dict
wallet_address_dict = wallet_address_instance.to_dict()
# create an instance of WalletAddress from a dict
wallet_address_from_dict = WalletAddress.from_dict(wallet_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


