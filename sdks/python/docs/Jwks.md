# Jwks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**public_key** | **str** |  | 
**private_key** | **str** |  | 
**created_at** | **str** |  | 

## Example

```python
from better_auth.models.jwks import Jwks

# TODO update the JSON string below
json = "{}"
# create an instance of Jwks from a JSON string
jwks_instance = Jwks.from_json(json)
# print the JSON string representation of the object
print(Jwks.to_json())

# convert the object into a dict
jwks_dict = jwks_instance.to_dict()
# create an instance of Jwks from a dict
jwks_from_dict = Jwks.from_dict(jwks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


