# ApiKeyListGet200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID | 
**name** | **str** | The name of the key | [optional] 
**start** | **str** | Shows the first few characters of the API key, including the prefix. This allows you to show those few characters in the UI to make it easier for users to identify the API key. | [optional] 
**prefix** | **str** | The API Key prefix. Stored as plain text. | [optional] 
**user_id** | **str** | The owner of the user id | 
**refill_interval** | **float** | The interval in which the &#x60;remaining&#x60; count is refilled by day. Example: 1 // every day | [optional] 
**refill_amount** | **float** | The amount to refill | [optional] 
**last_refill_at** | **datetime** | The last refill date | [optional] 
**enabled** | **bool** | Sets if key is enabled or disabled | [default to True]
**rate_limit_enabled** | **bool** | Whether the key has rate limiting enabled | 
**rate_limit_time_window** | **float** | The duration in milliseconds | [optional] 
**rate_limit_max** | **float** | Maximum amount of requests allowed within a window | [optional] 
**request_count** | **float** | The number of requests made within the rate limit time window | 
**remaining** | **float** | Remaining requests (every time api key is used this should updated and should be updated on refill as well) | [optional] 
**last_request** | **datetime** | When last request occurred | [optional] 
**expires_at** | **datetime** | Expiry date of a key | [optional] 
**created_at** | **datetime** | created at | 
**updated_at** | **datetime** | updated at | 
**metadata** | **Dict[str, object]** | Extra metadata about the apiKey | [optional] 
**permissions** | **str** | Permissions for the api key (stored as JSON string) | [optional] 

## Example

```python
from better_auth.models.api_key_list_get200_response_inner import ApiKeyListGet200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyListGet200ResponseInner from a JSON string
api_key_list_get200_response_inner_instance = ApiKeyListGet200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ApiKeyListGet200ResponseInner.to_json())

# convert the object into a dict
api_key_list_get200_response_inner_dict = api_key_list_get200_response_inner_instance.to_dict()
# create an instance of ApiKeyListGet200ResponseInner from a dict
api_key_list_get200_response_inner_from_dict = ApiKeyListGet200ResponseInner.from_dict(api_key_list_get200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


